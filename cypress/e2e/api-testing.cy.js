import { fa, faker } from '@faker-js/faker';

/*******************************************************************************************************
 * Author: Dominic Belmonte
 * Description: API test cases for the booking system.
 * API Document : https://restful-booker.herokuapp.com/apidoc/index.html
 * Test Cases:
 *  - Login and store token
 *  - Create a new booking
 *  - Retrieve booking details
 *  - Update an existing booking
 *  - Delete a booking
 *  - Validate booking status
 ********************************************************************************************************/

describe('API Testing for Restful Booking System', () => {

  let token;
  let bookingId;
  let userName = "admin"; // for demo only, should stored in a secured location
  let password = "password123"; // for demo only, should stored in a secured location
  let randomFirstName = faker.person.firstName();
  let randomLastName = faker.person.lastName();

  it('Login and store token', () => {
    cy.request('POST', 'https://restful-booker.herokuapp.com/auth', {
      username: userName,
      password: password
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
      token = response.body.token;
      cy.log(`Token: ${token}`);
    });
  });

  it('Create a new booking', () => {
    cy.request('POST', 'https://restful-booker.herokuapp.com/booking', {
        "firstname" : randomFirstName,
        "lastname" : randomLastName,
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
          "checkin" : "2018-01-01",
          "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Dog food para kay milo"
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('bookingid').and.not.be.null;
      expect(response.body.booking).to.deep.equal({
        "firstname" : randomFirstName,
        "lastname" : randomLastName,
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
          "checkin" : "2018-01-01",
          "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Dog food para kay milo"
      })
      bookingId = response.body.bookingid;
      cy.log(`Booking ID: ${bookingId}`);
    })
  });

  it('Retrieve booking details', () => {
    cy.request('GET', `https://restful-booker.herokuapp.com/booking/${bookingId}`).then((response) => {
      expect(response.body).to.deep.equal({
        "firstname" : randomFirstName,
        "lastname" : randomLastName,
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
          "checkin" : "2018-01-01",
          "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Dog food para kay milo"
      })
    })
  });

  it('Update an existing booking', () => {
    cy.request({
      method: 'PUT',
      url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
      headers: {
        'Cookie': `token=${token}`
      },
      body: {
        "firstname" : `Updated ${randomFirstName}`,
        "lastname" : `Updated ${randomLastName}`,
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
          "checkin" : "2018-01-01",
          "checkout" : "2019-01-01"
        },
        "additionalneeds" : `Updated Dog food para kay milo`
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.equal({
        "firstname" : `Updated ${randomFirstName}`,
        "lastname" : `Updated ${randomLastName}`,
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
          "checkin" : "2018-01-01",
          "checkout" : "2019-01-01"
        },
        "additionalneeds" : `Updated Dog food para kay milo`
      })

    });
  });

  it('Delete a booking', () => {
    cy.request({
      method: 'DELETE',
      url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
      headers: {
        'Cookie': `token=${token}`
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    })
  });

  it('Validate check deleted booking status, Not Found must be returned', () => {
    cy.request({
      method: 'GET',
      url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    })
  });

});
