
export async function fetchCars() {
    try {
        const headers = {
            'x-rapidapi-key': 'd847eeabebmsh8dd2ceb29fd1b78p1350ffjsnde203ac66ef2',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
        }

        const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla"

        const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`, {
            headers: headers,
        })

        if(!response.ok) {
            throw new Error("There was an error fetching the cars api data: ") // This throws the error to the catch function to handle.
        }

        const result = await response.json() // This makes our response a list of json objects we can use

        return result 

    } catch(error) {

    }
}