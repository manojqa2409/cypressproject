describe('API Testing', () => {

    it('GET - Method Testing', () => {
        //cy.visit('https://reqres.in/api/users?page=2');
        cy.request('GET', 'https://jsonplaceholder.typicode.com/todos/1').then ((response) => {
            
            expect(response.status).to.equal(200)
            
            const body = response.body

            expect(body).to.have.property('id')
            expect(body).to.have.property('userId')
            expect(body).to.have.property('title')

            cy.log(body.id)
            cy.log(body.userId)
            cy.log(body.title)

        })
        
    });

    it('POST-Method Testing', () => {
        cy.request({
            method : 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            body : {
                    title : 'POST Call',
                    body : 'Testing the POST Call-4',
                    userId : '101'
                    }
        })
        .then((response) =>{
            expect(response.status).to.equal(201)

            const body = response.body

            expect(body).property('userId').to.equal('101')
            expect(body).property('title').to.equal('POST Call')
            expect(body).property('body').to.equal('Testing the POST Call-4')

        })

                
    });

})