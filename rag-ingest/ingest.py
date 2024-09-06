import os
from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams, PointStruct
from langchain.text_splitter import TokenTextSplitter
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

QDRANT_COLLECTION_NAME = os.getenv("QDRANT_COLLECTION")
QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")
OPENAI_API_KEY= os.getenv("OPENAI_API_KEY")

qdrant_client = QdrantClient(url=QDRANT_URL, api_key=QDRANT_API_KEY)
openai_client = OpenAI(api_key=OPENAI_API_KEY)

def create_collection():
    qdrant_client.create_collection(
        collection_name=QDRANT_COLLECTION_NAME,
        vectors_config=VectorParams(size=1536, distance=Distance.COSINE),
    )

def get_embedding(text, model="text-embedding-3-small"):
    text = text.replace("\n", " ")
    return openai_client.embeddings.create(input = [text], model=model).data[0].embedding

def populate_collection():
    curr_id = 1
    for file in os.listdir("docs/"):
        file_path  = f"docs/{file}"
        content = open(file_path, "r", encoding="utf-8").read()
        points = []

        for chunk in TokenTextSplitter(chunk_size=256).split_text(content):
            print(f"Adding #{curr_id}")

            embedding = get_embedding(chunk)
            points.append(PointStruct(id=curr_id, vector=embedding, payload={"content": chunk, "path": file_path}))
            curr_id = curr_id + 1
        
        operation_info = qdrant_client.upsert(
            collection_name=QDRANT_COLLECTION_NAME,
            wait=True,
            points=points
        )
        print(operation_info)

create_collection()
populate_collection()
