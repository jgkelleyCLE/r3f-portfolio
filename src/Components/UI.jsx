import tw from 'tailwind-styled-components'

export const FlexRow = tw.div`
    flex
    items-center
    gap-2
`

export const FlexColumn = tw.div`
    flex
    flex-col
    items-center
    w-full
`

export const CharacterGrid = tw.div`
    grid
    grid-cols-2
    md:grid-cols-4
    gap-2
`

// export const PageContainer = tw.div`
//     pt-16
//     w-[100%]
//     px-auto
//     h-[100vh]
//     text-gray-800
    
// `

export const PageContainer = tw.div`
    h-screen
    w-full
    px-auto
    text-primary
    flex
    flex-col
`

// export const ContentContainer = tw.div`
//     w-[95%]
//     max-w-[1800px]
//     mx-auto
//     bg-white
//     rounded-md
//     p-4
//     bg-backgrouund
// `

export const ContentContainer = tw.div`
    w-[98%]
    md:w-[95%]
    max-w-[1800px]
    mx-auto
    bg-background
    rounded-md
    p-4
   mt-16
    
`

export const PageHeader = tw.h1`
    md:text-3xl
    font-semibold
    text-2xl
    mb-4
    text-tertiary
`

export const NavContainer = tw.div`
    flex
    items-center
    justify-between
    p-2
    rounded-md
    w-[95%]
    max-w-[1800px]
    h-16
    absolute
    top-1
    left-1/2 
    -translate-x-1/2
    z-40
    text-white
    bg-gray-800/40
`

