from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_openai import ChatOpenAI

# Always use ChatPromptTemplate — never f-string prompt construction
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant. Answer concisely."),
    ("human", "{question}"),
])

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

# LCEL pipe composition — never use legacy LLMChain
chain = prompt | llm | StrOutputParser()

if __name__ == "__main__":
    # Replace with your real invocation
    result = chain.invoke({"question": "Hello Copilot! Is SKILL.md active?"})
    print(result)
