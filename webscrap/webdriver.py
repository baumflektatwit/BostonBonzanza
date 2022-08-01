from selenium import webdriver

from selenium.webdriver.common.keys import Keys

driver=webdriver.Chrome(executable_path="C:\chromedriver_win32\chromedriver.exe")
driver.get("https://www.bostonusa.com/events/%22") 

print(driver.title) #Title of the page
print(driver.currenty_url)

#driver.close() #Close the browser
#driver.quit() #Quits the browser

driver.get(url)
Extract_list_of_events_based_on_xpath
events = driver.find_element_by_xpath('//div[@title="//*[@id="main-content"]/div[6]/div/div[2]/div[2]/div/div[1]/div[1]"]')

Print_out_events in Boston_based_on_current_page
num_page_events = len(buyers)
for i in range(num_page_events):
    print(buyers[i].text +" : " + prices[i].text)

Clean_up and close_browser_once_task_complete
driver.close()