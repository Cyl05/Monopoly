const generateBoard = async () => {
    try {
        const response = await fetch(`http://localhost:3000/properties`);
        const responseJSON = await response.json();
        return responseJSON;
    } catch (error) {
        console.log(error);
    }
}

export { generateBoard };