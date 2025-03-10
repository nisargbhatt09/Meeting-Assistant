from sqlalchemy import create_engine, Column, String, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql://user:password@localhost/dbname"

gine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class Meeting(Base):
    __tablename__ = "meetings"
    id = Column(String, primary_key=True)
    transcript = Column(Text)
    summary = Column(Text)

Base.metadata.create_all(bind=engine)