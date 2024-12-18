function printName(name: string | null): void {
  console.log((name ?? '').toUpperCase());
}

printName(null); // This will now print an empty string instead of throwing an error

function printNameSafe(name: string | null): void {
  console.log(name?.toUpperCase() || 'Name is null or undefined');
}

printNameSafe(null); // This will print 'Name is null or undefined'
printNameSafe('John'); //This will print 'JOHN'