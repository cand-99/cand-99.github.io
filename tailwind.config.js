module.exports = {
  mode: 'jit',
  content: ["index.html"],
  theme: {
    
    container: {
 
    },
    extend: {
      colors:{
        'abu' :'#202327',
        'abu-100' :'#15181C',
        'hijau' :'#00ba7c',
        'pink2' :'#f91880',
        'abu-200' :'#6e767d',
      },
      dropShadow: {
        '3xl': '  0px 0px 5px rgba(239, 239, 239, 0.4)',
      },
     
        width: {
          68: "68px",
          88: "88px",
          275: "275px",
          290: "290px",
          350: "350px",
          600: "600px",
          '6.5': '26px',
        },
        height: {
       
          '6.5': '26px',
        },
   
      },
    
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        'mytheme': {
          'primary': '#1D9BF0',
          'primary-focus': '#1C89D2',
          'primary-content': '#ffffff',
          'secondary': '#EFF3F4',
          'secondary-focus': '#ECECEC',
          'secondary-content': '#383D41',
          'accent': '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#161616',
          'base-300': '#dad5db',
          'base-content': '#d9d9d9',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#FF0000',
          'hijau': '##00ba7c',
         
        },
      },
    ],
  },
}