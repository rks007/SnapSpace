# SnapSpace

**Full Stack Social Media Application**

SnapSpace is a full-stack social media application built using Next.js. It features user authentication, image handling, and various social media functionalities including creating posts, liking, commenting, and user profile management.

## Features

- **User Authentication**: Secure authentication using [Clerk](https://clerk.dev/).
- **Image Handling**: Efficient image upload and management using [Cloudinary](https://cloudinary.com/).
- **Posts Management**: Users can create, delete, like, and comment on posts.
- **User Profiles**: Each user has a profile page where they can edit their information.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend**: Next.js, React
- **Backend**: Next.js API routes
- **Database**: PostgreSQL, Prisma
- **Authentication**: Clerk
- **Image Handling**: Cloudinary
- **Styling**: Tailwind CSS
- **Validation**: Zod

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rks007/SnapSpace.git
   cd SnapSpace
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add your environment variables:
   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
   CLERK_API_KEY=<your-clerk-api-key>
   CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Run the Prisma migrations**
   ```bash
   npx prisma migrate dev
   ```

## Usage

- **Create an Account**: Sign up using the registration page.
- **Log In**: Log in with your credentials.
- **Create a Post**: Navigate to the create post page and upload an image or write a text post.
- **Interact with Posts**: Like, comment, and delete posts as needed.
- **Edit Profile**: Update your profile information from the user profile page.

## Contributing

Contributions are welcome! Please follow the steps below to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.
