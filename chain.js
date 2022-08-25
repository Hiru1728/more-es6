const users = [
    { id: 1, name: 'abul', job: 'doctor' }
]
// console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        { id: 1, name: 'babul', job: 'leader' },
        { id: 2, name: 'rahim', job: 'menager' },

    ]
}
const firstJob = data.data[1].job;
// console.log(firstJob);

const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '35/A kochua barodi',
            second: 'third floor',
            third: 'right side'
        },

        postoffice: 'cantonment',
        city: 'Dhaka'
    }

}
const userFloor = user.address.street?.second;
console.log(userFloor);