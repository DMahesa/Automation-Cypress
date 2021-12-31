/// <reference types="cypress" />

describe('Tes Scenario Faktorial', ()=>{
    it('FK - 001 Klik Term of Service', ()=>{
        cy.visit('/')
        cy.get('.col-md-6 > :nth-child(2) > :nth-child(1)').click()
        //cy.contains('Halaman Term of Service')---> Harusnya menampilkan halaman Halaman Term of Service
    })

    it('FK - 002 Klik Privacy & Policy', ()=>{
        cy.visit('/')
        cy.get('.col-md-6 > :nth-child(2) > :nth-child(2)').click()
        //cy.contains('Halaman Privacy & Policy')---> Harusnya menampilkan halaman Halaman Privacy & Policy
    })

    it('FK - 003 Input Angka 7', ()=>{
        cy.visit('/')
        cy.get('#input').type('7')
        cy.get('#hitung').click()
        cy.get('#result').should('contain', 'Faktorial dari 7 adalah: 5040')
    })

    it('FK - 004 Input Angka Dengan Karakter -', ()=>{
        cy.visit('/')
        cy.get('#input').type('-7')
        cy.get('#hitung').click()
        cy.get('#result').should('contain', 'Faktorial dari -7 adalah: 1')
    })

    it('FK - 005 Input Angka Dengan 0 Didepan', ()=>{
        cy.visit('/')
        cy.get('#input').type('0007')
        cy.get('#hitung').click()
        cy.get('#result').should('contain', 'Faktorial dari 0007 adalah: 5040')
    })

    it('FK - 006 Input Angka Faktorial Puluhan', ()=>{
        cy.visit('/')
        cy.get('#input').type('90')
        cy.get('#hitung').click()
        cy.get('#result').should('contain', 'Faktorial dari 90 adalah: 1.4857159644817605e+138')
    })

    it('FK - 007 Input Angka Diatas 170', ()=>{
        cy.visit('/')
        cy.get('#input').type('175')
        cy.get('#hitung').click()
        cy.get('#result').should('be.visible')
    })

    it.only('FK - 008 Input Isian Huruf', ()=>{
        cy.visit('/')
        cy.get('#input').type('abc')
        cy.get('#hitung').click()
        cy.get('#result').should('contain', 'Please enter an integer').and('be.visible')
    })
})