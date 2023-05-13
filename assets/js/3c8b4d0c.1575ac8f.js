"use strict";(self.webpackChunkchisel_docs=self.webpackChunkchisel_docs||[]).push([[9792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var A=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,A)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,A,o=function(e,t){if(null==e)return{};var n,A,o={},i=Object.keys(e);for(A=0;A<i.length;A++)n=i[A],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(A=0;A<i.length;A++)n=i[A],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=A.createContext({}),c=function(e){var t=A.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return A.createElement(r.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return A.createElement(A.Fragment,{},t)}},h=A.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(r,".").concat(h)]||p[h]||g[h]||i;return n?A.createElement(m,a(a({ref:t},s),{},{components:n})):A.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return A.createElement.apply(null,a)}return A.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var A=n(7462),o=(n(7294),n(3905));const i={sidebar_position:3},a="AI Prompts",l={unversionedId:"the-basics/ai-prompts",id:"the-basics/ai-prompts",title:"AI Prompts",description:"screenshot of the green check mark",source:"@site/docs/the-basics/ai-prompts.md",sourceDirName:"the-basics",slug:"/the-basics/ai-prompts",permalink:"/chisel-docs/docs/the-basics/ai-prompts",draft:!1,editUrl:"https://github.com/egonSchiele/chisel-docs/blob/main/docs/the-basics/ai-prompts.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"The UI",permalink:"/chisel-docs/docs/the-basics/the-UI-and-editor"},next:{title:"Settings panel",permalink:"/chisel-docs/docs/the-basics/settings"}},r={},c=[{value:"Versions",id:"versions",level:2}],s={toc:c},p="wrapper";function g(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,A.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ai-prompts"},"AI Prompts"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of the green check mark",src:n(8107).Z,width:"189",height:"219"})),(0,o.kt)("p",null,'On the right you\u2019ll see a list of prompts. You can click any of these to have the AI write text for you. Let\'s try it now. Type the beginning of a story in the editor ("Once upon a time" will do). Click "Expand".'),(0,o.kt)("p",null,"You'll see a spinner at the left of the prompt heading while Chisel gets data from the AI. Soon a suggestion will get added to the suggestions column. Click on the suggestion to add it to your text in the editor."),(0,o.kt)("p",null,'It\'s as easy as that! There are other prompts too that you can try. Try clicking "Rewrite" now. After a few seconds, you should get another suggestion.'),(0,o.kt)("h2",{id:"versions"},"Versions"),(0,o.kt)("p",null,"When you get a suggestion back, your current text will be replaced with a diff:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of present tense prompt",src:n(9043).Z,width:"835",height:"293"})),(0,o.kt)("p",null,"I chose to convert this text to present tense and you can see the results. My text is on the left, and what the AI returned is on the right. This way you can easily compare the changes. If you're happy with the change, click apply, otherwise click close. Either way both versions of the text are saved, and you can access them by clicking this icon:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"versions icon",src:n(8230).Z,width:"179",height:"164"})),(0,o.kt)("p",null,"You can read more about versions in the 'Versions' section."),(0,o.kt)("p",null,"Right now you are getting back one suggestion at a time. If you\u2019d like, you can ask for more than one suggestion in response. Let\u2019s see how to do that next in the settings panel."))}g.isMDXComponent=!0},8107:(e,t,n)=>{n.d(t,{Z:()=>A});const A="data:image/png;base64,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"},9043:(e,t,n)=>{n.d(t,{Z:()=>A});const A=n.p+"assets/images/versions-diff-a70a69d6bb6a3fecc824ca654f89e8a3.png"},8230:(e,t,n)=>{n.d(t,{Z:()=>A});const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAACkCAYAAADcxx/QAAABVmlDQ1BJQ0MgUHJvZmlsZQAAKJFtkD1Lw1AUht9qS7CKVNBJwWx+VZGm/QG1gxUcYv12y5eJktRLElH/g4uLgyA4+QuUDi5O4i6oCAoO4g8QsmiJ56ZqWvXA4Ty8vPdw7gu0JRXG7CQAp+q7lekpcWV1TRRekUIaAgooKJrHirI8SxZ8z9YKbpHg82ac7xq86rfUx6WjsbnyQV/HU+avv6XSuuFpND+oRzXm+kBimFje8RnnXeJel44i3udsNviEs9rgs8izUCkRXxNnNEvRie+Js2qTbjaxY29rXzfw67uM6uI8zW7qAZQhQ0QOeTiwKJv/vfnIW8IWGPbgYgMmuX16WSSFwYZBPIMqNEwgG22cpJZ4xr+zizX9BZAcnkOsbVKOFwHQcx5rQ8/0jWPgUmaKq/wkmgiS3rqUa3BnDUgdhuHbMiCMAPW7MHyvhWH9FGh/oLfBJ1esYT/KrNWwAAAAYmVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADkoYABwAAABIAAABQoAIABAAAAAEAAACzoAMABAAAAAEAAACkAAAAAEFTQ0lJAAAAU2NyZWVuc2hvdE+DmPgAAAI9aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNjQ8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpVc2VyQ29tbWVudD5TY3JlZW5zaG90PC9leGlmOlVzZXJDb21tZW50PgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTc5PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CscvXTkAACDSSURBVHgB7V0JfBRF1n8kISRAuAIk3Pd93zeES0BRDjkURC7Z1XV1UVcUVxFhPfAWlVUBBdZVP2VRWBQQgXCDyn0f4Qj3fQRChAS+96+kJj2T6UnPZKZnpqdefpPurq56VfXq369fVXW9yleiRIk7pMgnEogsEEUNm7ajUyeSacfWjT7JQzHNlkB4dHT0xOxLdeZNCWRkpNONG6lUsUoNqly9NqXfusm/W3SLj4q8L4F8SjN7X6iOHKGhy5avSmUrVKFiJUpSeHi4Y5TQvGab4A7/SbpzJ/uc+DzzSkQSUUSIJopMJ48KzFIS6hj0EggL+hqoCigJZElAgVlBwTISUGC2TFOqiigwKwxYRgIKzJZpSlURBWaFActIQIHZMk2pKqLArDBgGQkoMFumKVVFFJgVBiwjAQVmyzSlqogCs8KAZSSgwGyZplQVUWBWGLCMBBSYLdOUqiKWAvOE1z9ULRrCErAUmEO4HVXVWQIKzAoGlpGAArNlmlJVRIFZYcAyElBgtkxTqoqYBuaBQ0dT3QZNDEsccZHGXxQWFkb58uXzWfYFChQg/BR5TwKmgfnc2dM0YMgoQ4AGkBEXafxBvXr1ovnz59OECRO8kn2RIkUoPj7e5i8jf/789N1339EXX3zhFf5WYFKyZEkaO3YstW/f3ml1IL+HH36Ynn/+eXr22WfpgQceoKJFi9ri1qlThyJsVz4+SVz6o8gBIJ371ee0e8cWpzlKIK9avphkGqcRfRgonbRERHhHPE8//TQ1a9aMXnrpJdq6dasoObQ+tL+iTAncd9991LVrV0pNTaU1a9bYiaVVq1b0/DPPUER0tF14v3796MUXX6QDBw4Q4ninteyy0L+Q4NQDdCAAWb/06o63JVC1alVq06YNQas2atQoB/sa4WHUMzKc/pZxg6Imjqd3e/ahxYsXU0xMDA0cOJBq1apFf/nLX+ipp56iVatWmQtmlFYP0IEMZGhqaNULFy7Q6tWrqU+fPlSlShW6cuUKbdu2jWbPnk0ZGRk5GgMBMFXQWKDRo0fT5s2b6csvvxTX+IfXaufOnUXDgD/u//vf/6bbt2/b4iAvNB6OcGF18OBBWrJkCe3atcsWx/HkhRdeIPYjKHjt37/fdrtatWo0YsQISklJoTfffFOEG+GPN0lCQgI1adKEGjRowD70btDevXtp+/btlJiYaOMPOV2/fp2WLl0q5FS9enWRny2C5gRvK5gLNmIZVmHTcnJ0fgHiqmFZfZakAyLK8hnTaffVFHEO+UC2FStWFNeHDh0yH8zI2RHQCIO29qdpgTLoEcwBCB7UrVs3cfzjjz8oNjaWoF1gjnz22Wci3PFfzZo1qWDBgiK4XLlydP78eVuUQoUK0bhx42wdTdiA4IeH5/PPPxfxWrZsKexE2NlowPT0dKpQoQJ16NCBPvjgAzsg2RjzCcrUuHFjOnHiBGnB3KVLFxG+bt06t/gPGTLEBjyYAqhT9+7dxQ/lRh8D1Lx5c2E+4SFFmW+xo0g9+vHHH2nHurXUPuMWDY0vTXXPnaG2qdeJopwbDKMqV6Ant+8W8mnRooVgu2PHDht756lst313ogU0cglUIDtK4PDhw0KjnTx5kgYMGEDDhw+nhg0bOkazXT/00EM0ceJE8TBMmjRJ2MxoZEkA2vTp0+n48eMCLH379hXaD/cjIyPpscceE6CApvv666/F2wHa7MEHH6QxY8bQ2rVrnQJmxYoVhAZv166deNDwIEC74hq0fPlyt/h36tRJpPv4449p2bJl4k2ENw1sXQBYgllE4n/Q3HPnzhX5yDB5rMIaF+ZDj/AMapN6KVOjHr0mb+se740uQDHcaYZc0KnG23DRokW2+H4DM0ogAe14bitdAJ5AGwLIIAAMYC5fvrzQRlrTwGjRp02bRnhFgubNm0cAs+SHtwF6+QDGp59+SngbgL766iuhEXGvXr16tk6luJn1b+PGjaIzVaxYMapbty7t3LlTmDt4m8DEgDkDEBrlD7MG2h42KwhvK5hFIGdDjDC9fv75Z3Ef3dwWEWz/5mcA5w+jWmwLe0L5U65SKa7PHS4HCPK+eTPbPbBfwYwCaQGN60AmaIIjR47YigibGa9RaFqYBu6CGfGPHj1q43fp0iXBA6ABP5glINi+U6ZMscXDCUAIAlidERoZpgTMIrzyAWY57IXRApTbHf4//PADtW7dWtipeNhKlSolwO0sb9j1W/mNcR9rXwC4OwO4hAdj9uiFbAuLoOIDB9Plpi0oMfkYLWM7HyZOjx49xMM5fvx4+tOf/kSXL1/2j83sTADBEJaWliY6YN4qKzSuXscReaDXLgkA15J8CMBDj2BKAMxt27YVpgaOIJggIKP8o6Ki6L333hNvDKQ7d+6c6PjhTYHRCEkV2Hwos3Qxldi6ibZF3hbmgLxn9JjGimFJahotvplBS2/dpo5sxjxyTx/Cg/7666/b5IUhzpkzZ4oHvX79+mI4z15CRnNU8UyRwJkzZ0Q+x44do7/+9a92ecK8gN2o7QDZReALjHagwwktfv/994sO66lTp2jPnj0iqlH+0MjQxuh8Pvfcc7YOJcZ2u5eKpWYrl9HqIlFUN5xHH/4zS/B251/y7Tt0uGp1KjnoQfo66TD9a8YMW/KyZcuKc4zgaB98mDgoP+7LDrZnxostK3XijgSc2Zau0qMBQRi9qFSpki0qzIPJkycTht8AaD2CGZOYNWyG2TOQ1Mo4N8q/ePHiiE5nz56l4zxBcTebDh8WLkBzjydRw0kvUuN1qzKBLGLl/u82R/kt/Tb988Ytan81jZpcSaP/1m1EV+o3pAy2xbWUnJwsLjEyA3tfEoYYJdDlW0ppZikdHx4vXrwouI8cOVI0wMKFCw3lhpEO2L0wD1577TUxigBbGqYD7HRMFJw+7XrKH2DGqAsItixMD0lG+V/Zt5fili+lOls20eHYwhTBe7UIwjCaQbrOeScygJew6bDkVgadZ21shNavXy9GbjD8N4M1Nt42eEPIEaTdu3fb3hQKzE4kKl9nEJokaDkZLsNwRBgAZrcfhzYCnwNAmGyARgUwAWZX/JBc8ps6darorGFoDNO3IHTeFixYYDf5Im44+QetheFETIzAzpSmhYyqx3/T7FkUueQnWlGkADU8dYRo1nSZxPDxBAMWwF3Mv9UM4uxxh5wspGy1MkcsKIJXXnmFHn/8cYI21s4UYkQG5ZeystSeJlgDOGn8EzklFQAhGMqKi4sTs4aYdHCXYPcCkHgIAE6p7Y3wQecNM3HQ7tB0zqhcyVjqG1eKWvHwV/OUyxSn2TjHWXxnYdC121j7LsaPO3A7MmBQeIcwRo7ZPpgWkAHMD9j/WlKaWSsNH56jARyF70526MhpZw+NpIUpgo4igIy0v/76q12y0jz6cBfGf3kIrVP6dSp40v2H7AYjeFU6a18G788M4tMGzQe7ghi4gPbFW0bax86SKDA7k4oFwqDBPvnkE9tUOT45xau8Ho849IyMoB4M4qb88+SL7TMMWAAXAF7JxxsMtEAgBeZAaAUflAF2NabIb7FJc/XnxZSwdhW9XjSKyrM29oR2Ztxh8KYLE2ILAzgQSYE5EFslj2WKZfuy69VLFP3sWLqHZ98KY/aNTQl3CBPnaxm0i1j7ohOHzlygkwJzoLeQwfLhewd899CLQducz+1Ha40xOc/mws8AL4N4BY8+YDgtmEiBOZhaS1NWNFxbfLiT1YGr7KH5sJc1Lmxf/H7n0Yfggq9GIHyqwGwvD6dX+GBT/6tcp0l8EliMrYVuDGCMPnSNCKciHpi/qMc6NhugfQHgo0FgPhgVpqlgjoouJMqVdiN75shomNEKeTveyAIRotM0made/UHVYD5kad/WfHTP8s0s8SVWt78wgGH/LudhtJRgVr8uGsE0MAO0XXtlTqsuWzSXAGijYS7K79NbT/KKh5d5Cc8+fv1O1v84zatlgK3bKgu8PflYncHsCR3kMkP7AsAb+RiY4w+e1Ew/jWlg1i9CYN75B4P46azlO+hcwSY94qNXcgybC13YbEDnDWZEcQ/MB3z7uyHLdACIk7w4+xaYLZSzVKaBGZoYGhkkzQyjYTmL7duQNwrmpzFsXmgJduonadnfamjveXJeiR8OsXSItS86ctkLqYxzu8rmwrKs2TeYEZctaj4YlYh9ixlN5WE8CWJtcqNh2jS+OscLfSoD+UEHICM/rJjIC5ihbDFkBgDjV9vD0Qe8HdBxg/ZFR857jxdqGdxkKpgDWVTQjNMLRdK9DDRnhM4XzAF3Ok+FeLKiM4/9ogN3F/MtickLNwm2LobMxPAZj/3CflfkXAIKzCyXaAbZnMKRbLfqd7YAdtiz37NWdEXlWOP24HjQvu2Znyfe5K7xZAUmLfD12VLO74IJkxdY8Ywv0+SiWVd1NHLP2/yM5BnyYI7hBvyGgQzNmxvB1HAG5iacFiMP+ICnPpYOeUDHYT6w2QANjGlkV9/+esA+1yRYJV66dGmxvArfdeSVjPDDKhksecKaQvk9c17yDWkwY8XwdwzkxgaADCFDM8MIieR0nQR4w8UnlHEe2L/oq21m0GZOXqTTLv6Qx58ErexNMsIPbrXgTgGeiaQPvryUIWTBHM8A/C8DubYb47iYgVsYE0kNeGVJtAdtn8rmAj6ZhPbFJ5RnfTTUlxdABHPakARzRQby9zEFxNixu43XkseD3aG0osXobL2GtCMunj78fTP9tj3bnRT4YDkUXOhiSRW0GRzCfPPNN4S1bZKwwgTr+HDER+pYiAoHK46+5ozGS0hIEO69YFZgGdWGDRtkVnZHb/PTModPOumDb9SoUbRlyxabi1+4L+jdu7dYEQ6ZYFUJvseGXz9XFHLLpmqyJoZGLuuBaeBKkNp7yTG8YrrrXXSxcTM6xmBGZ6hw4cIiCtxbwTsQCG624MMNBP8X8E+BxkMnDG5w4WIAvuawvB+rRrBaBWvkwA9HrH9LzFp9bTTe4MGDaejQoSJP2MZYv6h1rQuXBAj3Nj+RoeYfnENK/8rID0CF+zI8tHIlOZaG6clOw8p2mnuvxxY1+E8aMpBhJngbyBkR+WlXqXh6JSKaOoZF06H3ptGxfgPp9f8tpBEjRgjwwE8cCCu00YjQivDsCYIzE/iOe+SRR4RPC7gkwApsNOSjjz4qgPzLL78I33KDBg0SmhtOYRAfIDcaD+sIkR40a9YskT/KJ/1oiBv8z9v8JF/tcdiwYbRp0yYRBLcJADLKBzmA8KDqyU5EcPIvZMDckjts89m0wIfr3iDYu6c7JNCeJ/9Ooxu1pI77D9PUcxepevsOAmDQqgAgCKYBwIx1eOi9wzMoXqUAYlJSknA6CK2LXj38yMGMgMZ09DWH+4iHOOCF0QCs8TMaD+YF8oQWhF878IJbq48++shOJN7mZ8fcxQWcOqJ8uclOj4VpNnMEF7J8xeoUWSBKpyx3eJo7lY4fTWIhux7L1WGgG9yZRyHmFMpPBb2DYzrGZkTj5DP0w6g/C7Ng+dvv2vIuU6aMOIdvN0eCPQztg/V5Mp50xCLjAmgwMUDS3wV8zb3xxhsyijiCDwi+5uR5bvGk0xRH2xPguXr1qs2hjNYHnat8jfITBTXwT8okN9npsTIFzAByx259hG12/VqKXlkopmhxqlilJq1d8aPNF4JuZIM37uHJixk8sxdpML6RaOW4DhjZAEG7wbm2JOm/zdlKaukvDppaeiKCZtQjyQv3ZVoZV65Shq1tNJ6026U7K8kLR+3Ysrf5afNxdS7zzU12ejxMATM0MjoZ+NDoDje+HkFrd7tnEJWOL09nTh3Ti2Y4fBAD+SMGsnvjD7mzD2Mwdmdt74xgCoBq165tdxsdO5gXIHghKlGihDiXYeKC/yEdNDL26ZAOW6A5n3jC3h+I1tecdFuVWzzpBQiuB7QEp+fSBRfCjeZrlJ82L1fnRmWnx8MUmxkghUZ2BWQU8OYfafRH2g3KH+nJJLB9FUfxx0LTfABkmQumq52RNBuwVYLW3WzTpk3FiAZcze7bt0/8kB6+k7VAgnNyjCRAe0peznzNocMEd67Q8Ebj4QEBYUhMPgC4hqck7YiGt/khD1ckffDJfHOTnR4vUzSzs8zLVazGNnQ1CuOOjpaioqKpRp1GFF+2Ih3cu50uX8reNkEbz9X53/g75An8PbIvCd9xbGc/FHf4jaOldewbTrrDevvtt4XjFXTmsG8J6KeffhJejTC2i8aDlkQ8uJpCI8IOxSsfnUdoWvCDS69XX31VuPkCL+zKhI6S9DUHTW8kHhwfYugNThjfeust4d0ID5L02yzrofVB5ypfo/wkX8cj3NSCRowYIeoN7/tGZOfIR16Hc6dhorzw1TG2VBkqWKgwd+4OiiwA5MbN29G5MyfpWsoVupF6zfa7eP4spVy5RJE85lqnQXM6kXyIG9fYlwodu/aiVcsWURKPNCznGbbt/IXZSZ4lvsk/rJcr4KWRDFQCvC7WqEWpsSXp22+/tYkO9jCGnGA+VK5cWRxr1KghbF447IZHecQBwbs97mFyAqCGzQh7EcNSctIEkwlw7A1+MEFwhMmC/UAwpCd9sxmJh3zx0MBEQScPvODyCmGwvTFkiLqgH+BtfjYBaU7Q14DvOLgtQ+cVE0FSdnjgUD7IBf0FyG7OnDk22WnY2E5NmTSpWbcJxfI47PqVmftPtGp/F5sdV2nnVuczT7J0nbr3pRPHDgkNLcNcHV96bSpNfuFJ3ShwgFKHPwSqw+PNmT+2Y/ncU6PmU/5Y/wWdtYEAHHrnAAu2XYDHfW1HUVtIaEf4P0ZnEC68JEC1cTBigYcDQAMvPV9zRuLBpABY8JCAFzSsHnmbn2M+KIujDz4pO5hX165dE2XUk52Wn1/MDJgWN2/CzYhrQpywMHszxHUK13fxZRp+8MguCUZCVQY0HGXjg/mmhQtRO3agHXXmNKGj54pgN+uBGVoQe5/I/U9c8cHrVr5y9eJBYzvr5TvGNxIPDwRe5/jlRt7m55gfyuLog88d2Wn5+QXM2gL4+xywxuLPgzy0vYDPy5eMoWlT3qej3Fn6dNyzOTQ5tDtbLIKw9KkW//bxA6LI/xIwCczB09h4nWHQHn7adjLId4r5m+xJHLi6qp2lxWGqVOLfPi9P8vgfFsFZAlPAjJk9TIhgiA7Db4FMeN1jewU9wiqQ39P5JyJkg1wvvgo3TwKmgBlT1JjZw4QIxpEx/Hbh3GnzaqlyCgkJmAJmfGuBKWrM7GFCBOPIipQEvC0B+xF/b3PX8EMPFVPUGGvGOHIMf+frivLxkE2hwjEBb5a4qoO6Z64ETNHMjlXCzF7bzncTxpH1hugAZAzbHE/OnGhx5KGulQQcJeAXMGOKOnHJ91S2QhXdceRTx48IIKfz1K4iJQEjEvALmFGw1Osphmf2jFRExVES8BuYzRI9bHVFoSEBU77N8JcoMceP6fBw/qFD6dneSvalvyOn/+yD9a+cPktOA/V5uLijy0nccH4XcnFFOVNxSM7AHCxy45sjgZcDLKuZw/KF8ddW+e0+MTXQHl4WL7NzihungR7lrctJ3NC96zKvnKk4JGegSx7+uGna0JyZlYOGCOfPBh2/lTazDCov8yVgOTDDRhamRbhlXzrmoyRIcrQcmCF32MiKQk8ClgSzMi9CD8iosSXBHJpNqWqtwKwwYBkJKDBbpilVRRSYFQYsIwEFZss0paqIArPCgGUkoMBsmaZUFVFgVhiwjAQUmC3TlKoiCswKA5aRgKXA3Pv+EZZpGFUR9yVgKTC7X32VwkoSUGC2UmuGeF0sBWa/rCQJcQAFUvXVF+yB1BpZZYllX8yleUdXPTrBHvXj4uOp7/0D6T+zv2C3uSf0onoUXr1GTSrDHvxXr0z0KL2/Eikw50HyVWvUo2q1G3jEIWnvDjp0YJfTtPf26Ud9+2dueOkswqfTPmQn3CnUrn1Hmj9vrrMoHodhL5W338/cF3Dvnj107uwZj3mZndA0MDdv00V4wYdzFyMUX64SlatQlTZtWGEkul/iHE9OoksXM3eXcrcA2DlAjxYu+IF+25i5q0DzFq2o34BBNHP6J3ToYOYGO8eOJVOjxk30kucpvC1vyimpc5eu9O03X8nLgD+aBuaUq5cJgP59/XLKDdAAMuLu373VTQGaazXDPa8vXPSe5+3X8AOVKh0njgcP7Kc9u3JulJnQpRs9+dTfqURsLB3m3V4//OAdOs1bSYBq16lLAwY9QLXr1mN+Z2nd2jX07df/Eff0/nXu0p0uXDhPV3hLioSu3e3A3K5DJxo2fCRt3bKZmvOOWHD/+/ILz9E7Uz+m7Vu3UnXen6Vc+Qp0KOkgzZo5nR4Y8pDIG9tg4AFdOP97ev8jfij5/gfvvmUrwrPjXxQbcz73zFhbmDypU68+DR85mipUrERpaWm0e+cOmvbh+2IPFhlHHk3rAO7btZnBuYWate5MZcpXlvnnOGqBjPiKXEvg7t730YH9++jAvr1Ul3erGvvMOJEgLr4MvfjyJAHodWtW8ebyN2nIQ8Op/8DBugxL80Y54LFm1Upambicd4AqR7Vq17HFjykSQ/FlylLPu3tzfvvo1/XrhTuHMmXKUY9e94h9Vjb9/hvVrdeA3nx3qoi7bOkSKsB7gI8e8yjvFx7Hewyepg6dEnjDpkKCb7Fixaltu/Z08kROux8mz0sTJ1P5ChVp5YrldCz5KKftTMNHjbGVSXtimmZGpvt2ZYITgIb54Kihgw3IpctUoFJxZbXyNHyOnbbOnjpmOL5eRGjar76cLW5Peed91o41xb7bnbt2o8K8LfL4cU8LjY6t1mAL9+h5N8377v+csoOWxyYXqxjIly9fohGjx1Bn1s779u6xi/85mzwLfpgnwooUKSqO27ZupldfmSDOS3I5avJD8NL4cULL463y1N+fp0qVq1Di8l+oZas2vNdha0pcsYxatWnLu2eFcfgyuzxwgZX2X8z4jJLYvII2hwuJT2bM4gc0+wHTJjIVzMhYD9DBBmStEP15vn1btim2m82QWrXrUiRrwjZt24ti4VUvCWACQSumarZIlvcHPzhUnMJkKc47yALY0MIzP/uX3XbEWzZvkklsR60JBBMpjkdjYK6Azp7J7ERG5I8QfYHr168RbHOAGceLFy/Q9m0538LYzu1Q0gHxQA0ZNpwK8fZ7eOPokelgRkEcAY0waGvYyHkxLcx2KwfN6g3tivp7SlqXwLduZntMTU/PPD/HtrIkDOEdOZxEYazhHAn2dXiWr5F/TJhkd7tFq9a0bs1qW1gGb+bpSBm8/4uW9Hz8YcPOtatXMUC78fBjHNVv0Ij+N3+e0/39qvEegFPe+UDcw4N64ngy1WH7X29fSL+AGZXWAhrXeQUyeCjKlgA0drXqNdmk+Jbt0ePiRpWq1cTGldhbz5FgToBenTSBR50yzZ8Y3soYYMI9LZgd07p7DVPjLjZ3Hn9irDCJcO2MmjRrIWzy1ya9TL9uXC/iNmveklJ5jxxn5DcwozAS0NCoedHIzipmRhg2HCpUuIhHWWFozhcjIbIwG9atpfv69qcJr/yTflq4QOzFjc7fGd6a+InH7DtQsKfbd+wk7FI5JCj4sCb//beN1JRBVYR3b/UW7dm9S3QEGzVpxhtWHuK3xWGnrOUYd897elMxbIvMZSxeIpZSTwQgmFEDCWintXE70NyhOez97YtJE2215Sv9tsOrXe7iio3lnRE6be+9PUWMYIwc82dh/yJs6nvZQ2IyXb0GDYU9unrlChlkOyIMY93NW7Sk21mmhNa0wX41d/gvg4+SUOZ0TXllHTLSM+PABFm7eiX1HzCYEpc518rgtX7tWu4grqLWbdqJByo5+Qjhp+eR1FIube/u/zD9+N/ZvA9z5rCPFG6oH7EvNUYCUlOdazR/yGfCpFepYaPGNGbkMJ54uuiyCFG8jzrseXQcXZFfzQxXBXP3nuxwyKO76a0cH6MCgUKVq1Shf7w8mfftLs0TKd/nCmSUG5MlRsgSYFYANtLUgRHnNm/NDNMFs5RLlyzyaqGCHsx2QDbXZPZqQ4QKs+SjR2jOFzN9Ul3TprN9UnrFVElAI4GgBrOdVtZUSp2GpgSCGsyOTYYhIkWhK4GgBbPSyqELWr2aByWYFZD1mjO0w4MSzKHdZKr2ehIIOjArrazXlCo86MCsmkxJQE8CQQVmpZX1mlGFQwKmgjmKPwDCT0vOwgpEFST83CY1Mue2yKyUwDQwA7Rdet4vfhLQIqxHf+rCPxkGEGfG6+8ZoK3UOqoubknANDDnVip7EyKnirW/nxs3dT8UJWDq98xS+6bduG6TtbMwaWL8kZb9/a0RMPfqN4x+mjeHV1UUtvFXJ6EjAVO/mtOCWIrYWZgWxDKeOioJ5CaBgDEzXBXUiFZ2lV7dCw0JBAWYQ6MpVC3zKoGAB7NbWjlnvzGv8lHpg0gCAQ/mIJKlKqqfJaDA7OcGUNl7TwIKzN6TpeLkZwkENJjdspf9LEiVvf8lYOqkibvV9QTMSBPskyZqTxN3kZIZ39RJE8+KGLip1J4mgdU21gQzhuhyem31uuTVniZeF2meGAYsmD0xMfIkCQ8Sqz1NQnRPEw+wkockoTN7ovY0yYZJwGrm7CIG7pna04QopPc0CVxoBmfJ1J4m2e2mNHO2LNw+U3uaZIsspPc0yRZDzrNg6PzlLHVghag9TQKrPTwuDbb8MqMLqPY08ayJLLuniWficJ3qjgljzCiB2tOESO1p4hqLTveEyyWJ7bYVprNtlfHSidrTxEuC9Asbk2YA/VI3DzJVe5p4ILTASaLQHDhtYV8SX+5pEpBfzeVlNEOYGfCa5GRLXXuxqiurSSCgv2e2mrBVfXwrAUuBuWefob6VluIe0BIIODDnxcTIlrRJY3PZGaqzAJBAwIE5LzIxY6IkL+VTaX0rAUuB2SYqpZhtogilE2uCOZRaUNXVJgEFZpso1EmwS8A0MDdr3Zniy1UyLC/EbdoqwXB8bUReoK0oBCVgGphTrl6m5gYBXaZ8JWrGQL6WcsWjJjGtUh6VTiXylQRMa/f9u7fQ/j3bcgU0gAyNfGDvdkIaT0htO+yJ1II/jWlghqgkoPVMDmlaHNjjOZCDv0lUDTyVgKlgRiEB6AOsoR0BrYDsaROqdFICflkDKM2HZq0TaNOGRFEWYVowyOU9WUB1VBIwKgG/gBmFywTtHdbQCaKs+3dvY429VZyrf0oCnkjg/wGKGWVlaU+NeAAAAABJRU5ErkJggg=="}}]);