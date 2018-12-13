import { createGlobalStyle } from 'styled-components'

const IconFontstyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1543240957182'); /* IE9*/
    src: url('./iconfont.eot?t=1543240957182#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAXIAAsAAAAACGgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8ikpDY21hcAAAAYAAAABoAAABqup1uaZnbHlmAAAB6AAAAc4AAAIIUD2poGhlYWQAAAO4AAAALwAAADYTY3/3aGhlYQAAA+gAAAAcAAAAJAfeA4ZobXR4AAAEBAAAAA4AAAAUFAAAAGxvY2EAAAQUAAAADAAAAAwA+AF6bWF4cAAABCAAAAAfAAAAIAETADxuYW1lAAAEQAAAAUUAAAJtPlT+fXBvc3QAAAWIAAAAPgAAAE/jYMVVeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeibwIZG7438AQw9zA0AAUZgTJAQDk9AxKeJztkcENgCAMRX8FjSEedQvPxKMrsIMnBydsgb+tbuEnj7S/tIcCYAQQyE4iIDcEqouumB+QzI84mM88A1C3mlvpndH6RSZhPWkHX0WfIRN+LXafbxZ1b45v0zE/O/orrTiQBxg5FbZ4nDWRzWsTQRTA35vZ3QnbmC3NfjRxE5tus9uIbMJmP0Q0u4EKgmBvog1UEPRQLxZ7FVYkEL2aoyD0L8il3iwppP9ATz148CR47MVTunW2tfPgDe83D36PeUAALlLKAxahAYCsjloJWcCMoIeRb7cvS1U3IhdzopH5ltuhB6M0PTwXN+aXOblC5MeWu9cfHdAkTRPx/HCw//H/nVw/QO47olPaBy33idjDwEWnlIsNL4xQ90Kfw4iXHLpIv2dndovOxuOZIMzG8a6LilxV5/vCZDicUJpnhor7Nr5q+HJMb9vZmaxW8e9wIlx3AT8Cd19wNwADBdagDdCwnAazsFumtmNJjIph16uhFViStWoHfoy+tcr4IJqqd73wAZLp60fZ6cNXqLzceCNKRGQ7eNrpvbuLjb4b7Wwn99ov1msr1Wbn5IRC1sJ40bbK2ZFo7h23w07raan4uPlMNCua6TXrfKb8Pz7Q5/Q9lMAGiBFjvI+WY0uagmhICpH4Dsp2xHmP6Lewjiz7hrQS4CckAcl+/ypqPwumVyAVUsSbor+w4qwvjZq6dmMXp3cGSDYRcSBky59V+SthNbOARUPFP/JgaXlBkp8Ym9z7DwyWdYIAAHicY2BkYGAA4vRjZ9bH89t8ZeBmYQCBG0qyfxH0/wYWBuYGIJeDgQkkCgA8PwqRAHicY2BkYGBu+N/AEMPCAAJAkpEBFbACAEcLAm54nGNhYGBgQcMAAQQAFQAAAAAAAAA4AHYAwAEEeJxjYGRgYGBlMGBgYQABJiDmAkIGhv9gPgMADd0BUAB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxjYGKAAC4G7ICVkYmRmZGFkZWRjYGluCAzjystMS89JTErMy+dyTGRJzM5P083OSM1OTszj4EBANGsC1cAAA==') format('woff'),
    url('./iconfont.ttf?t=1543240957182') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1543240957182#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
export default IconFontstyle;