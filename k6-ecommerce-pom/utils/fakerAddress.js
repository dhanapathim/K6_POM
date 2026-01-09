export function createFakeUser(vu) {
  const ts = Date.now();

  const firstNames = ['Amit', 'Rahul', 'Priya', 'Neha', 'Arjun', 'Kiran', 'Suman'];
  const lastNames = ['Sharma', 'Reddy', 'Patel', 'Iyer', 'Gupta', 'Verma'];
  const cities = ['Bengaluru', 'Hyderabad', 'Chennai', 'Pune', 'Mumbai', 'Delhi'];
  const streets = [
    'MG Road',
    'Brigade Road',
    'Anna Salai',
    'Link Road',
    'Ring Road',
  ];

  function pick(arr) {
    return arr[vu % arr.length];
  }

  return {
    // === Person ===
    firstName: pick(firstNames),
    lastName: pick(lastNames),

    // === Company ===
    company: `TechCorp ${vu}`,

    // === Address ===
    address1: `${Math.floor(10 + (ts % 90))}, ${pick(streets)}`,
    address2: `Near ${pick(streets)}`,
    city: pick(cities),
    postcode: String(100000 + (ts % 900000)), // 6-digit Indian PIN
    country: 'India', // UI dropdown label

    // === Extra (useful for forms) ===
    email: `user_${vu}_${ts}@example.com`,
    phone: `9${Math.floor(100000000 + (ts % 900000000))}`,
  };
}
