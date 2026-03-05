import streamlit as st
import pandas as pd

st.title("Streamlit Vibe Coder")
st.caption("Copilot SKILL.md is active.")


@st.cache_data
def load_data() -> pd.DataFrame:
    # Replace with real data loading — cached so it doesn't re-run on every widget interaction
    return pd.DataFrame({"name": ["Alice", "Bob"], "score": [95, 87]})


df = load_data()
st.dataframe(df)
