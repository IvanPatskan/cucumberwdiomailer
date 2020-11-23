const { Given, When, Then} = require('cucumber');

Given('I am on the login page do login', function () {
		//browser.url('https://test.lumen.ceek.com/login/');
		browser.url('https://www.ceek.com//login/');
		
		browser.pause(2000)
});

When('I log in and go to discover and click on like button', function () {
		browser.$('//*[@id="si-email"]').setValue('mewiwev62879@jqjlb.com')
		browser.pause(2000)
		browser.$('//*[@id="si-password"]').setValue('qwerty123')
		browser.pause(2000)
		browser.$('//*[@id="login"]').click()
		browser.pause(2000)
		browser.url('https://www.ceek.com/discover/');
		browser.pause(2000)
		browser.$('/html/body/div/main/div[2]/div[2]/section/article[1]/div[1]').click()
		//browser.$('/html/body/div/main/div[2]/div[2]/section/article[2]/div[1]').click()

		browser.pause(2000)
});

Then('The video must be liked', function () {
	browser.url('https://www.ceek.com/my-list/')
	//browser.url('https://test.lumen.ceek.com/discover/');
	browser.pause(2000)
	var datainfo = browser.$('/html/body/div/main/div/div/div[4]/section/article[1]/div[1]').getAttribute('data-info');
	browser.$('/html/body/div/main/div/div/div[4]/section/article[1]/div[1]').click()
	expect(datainfo).toEqual('366')
	//expect(n).toEqual('Avatar')
});