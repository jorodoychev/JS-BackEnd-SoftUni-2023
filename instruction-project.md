1. Init project and structure
2. Setup developer environment
3. Install express and nodemon
4. Configure static middleware
5. Configure bodyParser
6. Configure routes
7. Add images and css in public directory
8. Add html files in views directory
9. Install express-handlebars
10. Configure view engine
11. Add main layout
12. Fix public styles hyperlinks (remove static)
13. Convert all html views to handlebars views
14. Group views by meaning
15. Add controller folder
16. Add home controller
17. Add database
18. Install mongoose
19. Connect to db
20. Prepare user functionality
21. Add user controller
22. Add controller to routes
23. Fix navigation in the nav bar (login, register, logout)
24. Render login page
25. Render register page
26. Add User model (create folder models)
27. simple validation in Schema
28. Add method for register
29. Create folder services
30. Create first User record i DB
31. Validate password mismatch
32. Validate email already exists
33. Install bcrypt
34. Hash password
35. Login
36. Find user by email
37. Validate password with hash
38. Install jsonwebtoken
39. Promisify jsonwebtoken
40. Generate SECRET to constants.js
41. Generate token in service userService
42. Install cookie-parser
43. Configure cookie-parser
44. Set cookie with the token
45. Implement logout
46. Authentication middleware
47. Create directory middlewares
48. Create authMiddleware.js
49. Add auth middleware and import in express configuration after cookieParser
50. Decode the token
51. Handle invalid token
52. Provide Authorization
53. Dynamic navigation
54. Conditional options in navigation
55. Add data to res.locals for hbs templates
56. Error handling
57. Add 404 page
58. Redirect missing route to 404
59. Add global error handled (option)
60. Add error message util
61. Show error notification in the main layout
62. Pass error to render in login and register pages
63. Automatically login after register
#############################################################################################
64. Map pages to navigation in both LoggedIn and LoggedOut state
65. Add Creature model to mongoose
66. Implement all Posts
67. Show each creature with image, name, species, description
68. Add details button to every creature
69. Add details page(for creatures)
70. If no creatures "There are no posts yet..."
71. If the user is the owner of the post should have "Edit" and "Delete" button
72. If the user hasn't logged in => no buttons
73. If the user not the owner => vote button
74. Vote button when clicked -> "Voted"
75. Redirect to the details page for the current creature
76. Show the email of the people voted
77. If user already has voted -> "Thanks for Voting" and add the email of the vote people
78. Add Creature -> on success redirect to all posts page
79. Delete Creature -> on success redirect to all posts page
80. Edit Creature -> on success redirect to current creature page
81. Routes Guards - check
82. Validations - Login, Register, Animals(Creatures)
83. Bonus - Profile show my posts. If there are no posts - msg
