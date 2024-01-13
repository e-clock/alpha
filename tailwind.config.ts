import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#F8F8F8',
            foreground: '#0f172a',
            focus: '#008EF4',
            content1: '#FFFFFF',
            primary: {
              100: '#FEE5D1',
              200: '#FEC5A4',
              300: '#FC9D76',
              400: '#FA7653',
              500: '#F7391C',
              600: '#D41E14',
              700: '#B10E12',
              800: '#8F0816',
              900: '#76051A',
              DEFAULT: '#F7391C',
              foreground: '#F8F8F8'
            },
            secondary: {
              100: '#DFECF5',
              200: '#C1D8EB',
              300: '#8FA9C3',
              400: '#5A6F87',
              500: '#1F2937',
              600: '#161F2F',
              700: '#0F1727',
              800: '#09101F',
              900: '#050B1A',
              DEFAULT: '#1F2937',
              foreground: '#F8F8F8'
            },
            success: {
              100: '#E7FCD6',
              200: '#CAFAAE',
              300: '#A3F083',
              400: '#7DE162',
              500: '#48CE33',
              600: '#2DB125',
              700: '#19941C',
              800: '#10771A',
              900: '#096219',
              DEFAULT: '#48CE33',
              foreground: '#F8F8F8'
            },
            warning: {
              100: '#FFFBCC',
              200: '#FFF699',
              300: '#FFF066',
              400: '#FFEA3F',
              500: '#FFE100',
              600: '#DBBE00',
              700: '#B79D00',
              800: '#937D00',
              900: '#7A6500',
              DEFAULT: '#FFE100',
              foreground: '#0f172a'
            },
            danger: {
              100: '#FEE6D5',
              200: '#FEC7AB',
              300: '#FDA081',
              400: '#FB7B62',
              500: '#F9402F',
              600: '#D62222',
              700: '#B31724',
              800: '#900E23',
              900: '#770923',
              DEFAULT: '#F9402F',
              foreground: '#0f172a'
            },
            overlay: {
              DEFAULT: 'rgba(26, 38, 52, 0.8)',
              foreground: '#F8F8F8'
            }
          }
        },
        dark: {
          colors: {
            background: '#121212',
            foreground: '#E1E1E1',
            focus: '#3D8BB8',
            content1: '#1F1F1F',
            content2: '#2C2C2C',
            content3: '#383838',
            primary: {
              900: '#F0A082',
              800: '#EC7B5E',
              700: '#F34431',
              600: '#D43129',
              500: '#B12227',
              400: '#8F1D2B',
              300: '#76212F',
              200: '#622033',
              100: '#522235',
              DEFAULT: '#B12227',
              foreground: '#F8F8F8'
            },
            secondary: {
              100: '#1B1B1B',
              200: '#2C2C2C',
              300: '#3D3D3D',
              400: '#4E4E4E',
              500: '#5F5F5F',
              600: '#707070',
              700: '#818181',
              800: '#929292',
              900: '#A3A3A3',
              DEFAULT: '#E1E1E1',
              foreground: '#F8F8F8'
            },
            success: {
              100: '#19361C',
              200: '#285225',
              300: '#376E2E',
              400: '#468A37',
              500: '#55A640',
              600: '#66C249',
              700: '#77DE52',
              800: '#88FA5B',
              900: '#99FF64',
              DEFAULT: '#55A640',
              foreground: '#F8F8F8'
            },
            warning: {
              100: '#332B1B',
              200: '#544528',
              300: '#755E36',
              400: '#967744',
              500: '#B79052',
              600: '#C8A464',
              700: '#D9B876',
              800: '#EACC88',
              900: '#FBDF9A',
              DEFAULT: '#B79052',
              foreground: '#F8F8F8'
            },
            danger: {
              100: '#331D1B',
              200: '#542B28',
              300: '#753836',
              400: '#964544',
              500: '#B75252',
              600: '#C86464',
              700: '#D97676',
              800: '#EA8888',
              900: '#FBA0A0',
              DEFAULT: '#B75252',
              foreground: '#F8F8F8'
            },
            overlay: {
              DEFAULT: 'rgba(248, 248, 248, 0.8)',
              foreground: '#0f172a'
            }
          }
        }
      }
    })
  ]
}
export default config
