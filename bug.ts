function printName(name: string | null): void {
  console.log(name.toUpperCase());
}

printName(null); // This will throw an error because toUpperCase() is not defined for null