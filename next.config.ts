import nextra from 'nextra'
 
const withNextra = nextra({
  // ... Other Nextra config options
})
 
// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
   eslint: {
         ignoreDuringBuilds: true, // skips all ESLint errors at build time
       }
})
