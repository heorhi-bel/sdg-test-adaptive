# Getting Started by the link  
  https://heorhi-bel.github.io/sdg-test-adaptive/
# Report:
• The page must be implemented according to the design layout
https://www.figma.com/file/OFhxh3RHOPL7tvxCpITcmj/UX-5285?node-id=0%3A1 -- Done√
• The layout must be responsive. -- Responsive and adaptive implemented√
• On clicking the SIGN UP button, a modal with a registration form should open. Done√
• The close button (X) should close the modal. The same behavior should occur when pressing Esc with the modal open. -- Done√
• The form submission should register the user with a PUT request to the endpoint https://api.dating.com/identity with the body. -- Done√
• After successful registration, the Thank You message from the design should be displayed. -- Done√
• LESS/SASS preprocessors can be used for styling. -- Done√
• TypeScript can be used. -- Not used
• Push the code to a public Git repository. -- Done√
• If a server build and launch are required to open the page, instructions should be in the root of the repository in the README.md file. -- Not required√

# Additional:
● Add validation for email and password fields. The password should be at least 8 characters long, and display errors under the fields. -- Done√
● Before the registration request, attempt to authenticate with a GET request to https://api.dating.com/identity using Basic Auth. -- Done√
● Immediately after successful registration/authentication, redirect the user to the authenticated area at https://www.dating.com/people/#token={TOKEN}, where {TOKEN} is the authorization token returned in the X-Token header of successful requests to https://api.dating.com/identity. -- Done√
● Save the authorization token on the client and implement automatic redirection to the authenticated area using the token upon page load. -- Done√
● Optimize images. -- Done with a compressor, optimized by more than 5x √
● Minify the code served to the client. -- Done using Webpack√
