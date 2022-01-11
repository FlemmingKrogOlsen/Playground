function fnCalculateAge(value: string):number {
    const birthDate = new Date(value);
    const difference = Date.now() - birthDate.getTime();
    const ageDate = new Date(difference);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    return calculatedAge;
  }

  export default fnCalculateAge;