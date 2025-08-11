import bcrypt from 'bcryptjs';

export async function generateHashedPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

// Скрипт для генерации пароля
if (require.main === module) {
  const password = process.argv[2] || 'password123';
  
  generateHashedPassword(password).then(hashedPassword => {
    console.log('Original password:', password);
    console.log('Hashed password:', hashedPassword);
  });
}
