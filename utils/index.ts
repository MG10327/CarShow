
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

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
  