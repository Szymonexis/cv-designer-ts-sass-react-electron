
const GetDataFromLocalServer = async () => {
    const platform = await window.fetch("http://localhost:5000/api/platform", {
        method: "GET",
        headers: {
            "content-type": "application/json;charset=UTF-8",
        },
        body: "",
    });

    return {
        platform: platform
    }
}

export default GetDataFromLocalServer;