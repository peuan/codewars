// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// export function predictAge(age1:number, age2:number, age3:number,age4:number,age5:number,age6:number,age7:number,age8:number): number {
// 	const ages = [age1, age2, age3, age4, age5, age6, age7, age8]

// 	return Math.floor(Math.sqrt(ages.map((age) => age*age).reduce((acc, age) => acc + age, 0)) / 2)
// };

export function predictAge(...ages: number[]): number {
	return Math.floor(Math.sqrt(ages.map((age) => age*age).reduce((acc, age) => acc + age, 0)) / 2)
};


console.log(predictAge(65,60,75,55,60,63,64,45));