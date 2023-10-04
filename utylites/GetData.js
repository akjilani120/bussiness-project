const GetData = async () => {
  const res = await fetch("datas.json");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const datas = await res.json();
  return datas;
};

export default GetData;
