package com.cognizant.ormlearn;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.cognizant.ormlearn.service.exception.CountryNotFoundException;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class DataJpa2ApplicationTests {

	@Autowired
	private CountryService countryService;


	@Test
	void testAddCountry() throws CountryNotFoundException {

		Country country = new Country();

		country.setCode("ZZ");
		country.setName("Zanzibar Test");

		countryService.addCountry(country);

		Country result = countryService.findCountryByCode("ZZ");

		assertEquals("Zanzibar Test", result.getName());
	}

}