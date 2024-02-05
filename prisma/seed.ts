import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed(){
    const employe1 = await prisma.employee.create({
        data:{
            firstName:'Belen',
            lastName:'Ochoa',
            email:'asx@gmail.com',
            PhoneNumber:1235168


        }
    })
    const employe2 = await prisma.employee.create({
        data:{
            firstName:'kevin',
            lastName:'mejia',
            email:'kc@gmail.com',
            PhoneNumber:362656


        }
    })
    const shipments1 = await prisma.shipments.create({
        data:{
            date:  '09-07-2021',
            destination:'parque central',
            description:"Shipment for Belen",
            responsableid: employe1.id,
            cost: 12.50,
            

            
        }
    })
    const remitter1 = await prisma.remitter.create({
        data:{
            name :'Kevin',
            address:'perroloma',
            email:'jwclk@gmail.com'

            
        }
    })
    const receiver1 = await prisma.receiver.create({
        data:{
            name :'Juan',
            address:'calle 4#',
            phoneNumber: 1234567890
        },
    })
    console.log('Seed data inserted successfully');
}


seed()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });