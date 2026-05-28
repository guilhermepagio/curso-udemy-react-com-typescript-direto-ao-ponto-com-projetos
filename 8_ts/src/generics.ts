function getArrayLength<T>(arr: T[]): number {
  return arr.length;
}

const numeros: number[] = [1, 2, 3, 4, 5];
const strings: string[] = ["hello", "world"];

console.log(getArrayLength(numeros));
console.log(getArrayLength(strings));

function mergeObjects<T extends object, U extends object>(
  obj1: T,
  obj2: U,
): T & U {
  return { ...obj1, ...obj2 };
}

type Address = {
  street: string;
  city: string;
};

function updateAddress(address: Address, updates: Partial<Address>): Address {
  return { ...address, ...updates };
}

const originalAddress: Address = {
  street: "123 Main St",
  city: "Anytown",
};

console.log("Endereço original ", originalAddress);

const updatedAddress = updateAddress(originalAddress, { city: "New City" });
console.log("Endereço atualizado ", updatedAddress);

const secondeAdress: Readonly<Address> = {
  street: "456 Elm St",
  city: "Othertown",
};

// secondeAdress.street = "789 Oak St"; // Erro: Cannot assign to 'street' because it is a read-only property.
