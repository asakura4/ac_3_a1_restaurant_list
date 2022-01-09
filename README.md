# Restaurant List

A website can save the user's favorite restaurant!  
The user can add, edit, or delete their restaurant in his own list. No other user can reach it.
Besides creating a user on the website, third-pary login like using a Facebook account is available.


![image](https://github.com/asakura4/ac_3_a1_restaurant_list/blob/master/screenshot.png)

## Functions

Implemented Functon:
Must create your account to use the service, or login via your Facebook account.  
Each email can only register one time.
After login, the user is allowed to do the following action.
<ul>
  <li>Add a new restaurant to the user's list, but duplicate restaurant name is prohibited</li>
  <li>Look the detail of the restaurant</li>
  <li>Edit an existing restaurant.</li>
  <li>Search the restaurants by keyword(name and category only)</li>
  <li>Delete an existing restaurant</li>
</ul>

## Dev environment

<ul>
  <li>node: v14.18.0</li>
  <li>mongoDB: v4.2.18</li>
</ul>

## Install step

1. Clone/Download the project!  
2. move to the directory you cloned/downloaded.  
3. Install the package you need.   
``npm install``
4. Run the seeder to import the sample data.  
``npm run seed ``  
5. Run the server.  
``npm run start``

## Sample user
The user can use the sample accounts below to try the feature on website!  
User1  
``
email: 'user1@example.com'  
password: '12345678'
``  
User2  
``
email: 'user2@example.com'  
password: '12345678'
``  
 
  


  
