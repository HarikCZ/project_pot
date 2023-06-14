import NextAuth from "next-auth"
import { FirestoreAdapter } from "@next-auth/firebase-adapter"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'

import { cert } from "firebase-admin/app";

import { initFirestore } from "@next-auth/firebase-adapter";

export const firestore = initFirestore({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC2AyfsrHsRjTk8\nyngNiwbUm7bi/RNpaCakl1ahqlTtr706AIHc6GbIBAE7IOJEl+bXGWYVLO3hFu5O\nCR740papbXk0AHaVEMITNXsAFn9cIJJb3DbHi6ndhguGSgOmOpIqgDhhwU3P8KaT\nX0rOt9yHTtAend/HTL9O6ET2uPOB2tfAy41QqXLKeT8WIblciIcuC29/2Wz+uFvm\nwu6aukjYlt9IqP1E7V1zA6LDAGSFQlkzylOqP8blMKJ7oQBljMDY9sjz3zezJoJK\nZcCcsgqm/6dfURFWYTurTkkAk0YGs42DaKiZtBKwlsZPYEDX7rWG+6ZdfwwyQIyY\nsgMvjVkNAgMBAAECggEAPlE1TbC+UEOYicpOsWBc3dVUmEIK7+eDd44DUMW3X0vw\nz1eWHvMJIclRPJPlNJQHqrTdAToJVixaOiigTJQZlnfPbDEOaLo8oIQKkXyibYIP\nalkq/kZAygJXlspnlnXuTpPo+ftLr3rXJZUWUVGdNUyUMC9gi2WpCJS46/pmERqt\nzN+qWAXK4YGr3rV9KwILABfuVQPYlfdUOL/LWh+IkvbMNsp/9fi6zjscRKxWPISL\nHpztS2VXVbVkqNCgX81VTFw2VW5tMgmSa9hptKf0/l5tJdpJvOiYlUjbVxrfrwDs\naFm8RGTAM87jRgDP9LbL060FZ5jsM9E87eIXJMgCNwKBgQD4IxEnPX20w/YSMmRx\n+jirnqRW6ihGdJTqoQvdWWJqC9pFlNvFBo+ybgL5GuADPOgmP1CB+Zev3TGPWHFr\n0Uts/ACiMKnLXByoRmfvQVJ59ZRM5YVk2agwyxcrp3L7UgUrgrOQjLlCwkqZTwgA\nwWooGg8e5rNVFVI9tJLEPwHQcwKBgQC7x6xugnmjWQ4/DdWXvjtGmms6F+3RCYsV\nxYSjfZV4g0I+Mh0P/MeAB/D8oAw4rgacFjejAyc8CR+OvWFjxzGfO/a+En99HgZc\nZ2NkJkkZaJu3QBElym5ganhDm8lIpdqgtvbErxbn3Egi1lMVIgbL897yJGb3C80P\nRIQij7FQfwKBgG/QfX5NO0QludDhXFnwA3Fyf2ObCKMXDbPc9le8W5il1qncNlxG\nZKJm6HgQIDnVTFdP2Jt5OV1KM3cAx7tqCK8Hr9FmVF0LGO7LKzKpIN1MSJOOKdoU\nKrIyEjLdtfaCM0o0D25nu2PV4X/MGTMd9RQ1CfNGyjDg9rpPkINWUR75AoGBAKrU\nQw0iC9DMAsbgKhFrEXfwoV3vSP3jpbF/yGQHqsRA/TGh24ig2Umjb9wTKisiPocf\nOyxEgRv/3MK5jPD91SncnmNaZrsHZpgHwobowZWo8ghq826i03lJQvGWty4tHFEb\nQjG6a6cxYjq3KkxOcUp4KLm23ikfhkS+e0sJ2DC3AoGADeIsN7UepQO3gwHozGPf\nLBJ8c2/y/3mtGVLVO87EICEcXuF5Pyg2uraG19ZjRZC3Bf/yvr06gE58T1h1BTut\nM4DaaTPbDloMiTSBRzx/0Lc4bHxQthFIFkndAqAMiwLs1dxfk+JZMCgNOw73YyG+\noOW0dA8TwPeH9OQvOjCspUA=\n-----END PRIVATE KEY-----\n"
  }),
});

export default NextAuth({
  // Configure one or more authentication providers
  secret: process.env.AUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
    // ...add more providers here
  ],
  adapter: FirestoreAdapter(firestore),
})