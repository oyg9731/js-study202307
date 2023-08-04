  

// 하나의 상품 객체에 대한 설계도
class Product {
    // 객체를 만들 때 초기값을 세팅하는 용도
    constructor(title, image, price, desc) {
      this.title = title;
      this.imageUrl = image;
      this.price = price;
      this.description = desc;
    }
  }
  // 객체 생성
  const p1 = new Product('냠냠이',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAADMCAMAAACY78UPAAACTFBMVEX///+i/1X/3iUAAABInVn/ZKWm/1ei/1T/WVml/1el/1VJnlkvnrf/Y6RGm1n/Z6f/4ib/+vz/5Cb/9vrf39/p6en/5vD/bKr4+Pjw8PD/b6vV1dWo/2D/gLX/XqL/7vXFxcWYmJhlZWWtra2ioqIWFhaE0EUNDQ3/ebH/3Or/yN69vb1wcHBdXV07OzuQkJBISEjB/49/f3//jb3/0uT/wNolJSWx/3DR/66Z8VCL20lOpFmI4lb/k7//ttT/ncUAAA3z/+r/++ZmoTb/bSb/4ToZJw19xULo/9jM/6RSUlJWhy1vrzo+YSBar1jy/+h601dpwVhRgCu1/3uCvo0gRScrKyv/7JHY/7z/403/+NZiVg55aRLu0CP/8KcqQha4oBs1LgijjhgVIQtGbiVxJyeOMjJUhCwqjqSA2VfF/5bX7ds2LTV/lYOhzKlssXmqv65hhGhIeVE0WTtAVESVxp7L2c4uOzGNtJTe8eJ0toE+gkxilGyyz7cZNR8LFw1kb1t2k2GClXRjfk0SABolGC0sYTc3UiGtyJiw5IaTxmr/98Kar54oIyz/6n+14JWj5W5IXDmOrna7t6FIPwpskE7/tyaxaxr/52PVvDEvEgfRxpKKTBR7MxKdQhdUIwwhGgXJUx2RunDVw2HM6rakv2VkITIgAAKb2GgtJwhvZTTcTU1SHR1PQ1dEGBiuaF7Cd0z/cXOli0Z6pEzES0lyS0mvnUSDqDSLg1z/+JLf1acNKjAhboDGtWGJg2MXTVkiPQUodXl114i03ecp572bAAAbKElEQVR4nO1di18aZ7oGXp3JQBEvIIqAKCB4AQRULt5QqyDeojQGbaJtdTetaZv0lmw2m5jtzXRtbZttzzHbvfS0PWe723b37HZ3z7bNbs7lHzvvNwMywyUMguhmeX6/JASZYZ5579/7fqNEUkEFFVRQQQUVVFBBBRVUUEEFFVRQQQUVVFBBBRVUUMHJRF1DQ2djw3FfRdnRabcbDCOjjX11x30l5UTfsFerNegMBq+qv7Pxn4Z6p0GlVKm0huourX3Y2//PIvNGo7JapVIqldXGapXdPtzfeNxXVBZ0GZVaFRJX6arxn2qdsb/zn0HgnXZltVZpMOi0Op3SWF1dra0eljz8xFtHDEqt0j4y0ipp6BzpZwWv7Hz4Nb3PiC7NPsJF7jpJow5tvdr70PPuHFHpVMa+VMLSZbRXV+v6jvGSyoI69GrVI3zxGnSqamXrsV1QuTA6Miq0Zi+au+rh92uS1j4B7boR9Omqh96+MzFiVFUbstp33cMc3lpH0KHr0uXd2mDQeg2dD7HZd2LWpjSkv+nVebFgUzY2dD6kpWrrMEnZhoVv1tmJDti1/TpVf9fDqeteLE209hHBe12j+KaSZLA6lcHe9w/g89QmdUGfbyWCrU5P17p06OFJyaLSqrS60a6TrurdUQCwNIk/oFWHgtUpdXVCXUbWmMwMYx5HyjWd92QncxoHsHCJPqJRi7aNpdmoUNx1w1qlFz15Qz9Rdq1KdZLXJZo8SDnabOoFMIs8pMGLtFRG72ja+yMjRkMn+6rOQKzcOHxyFb0FWfeqLz72mAR1XSPumFZSihn7vOms6vrtDQkNaCW6nhHlTgya2gGefU7yvEKhqLkRAqcoEycJC1ZiI1lyk1S51qkivE+ovE02sPU+f+mSQlFVpbh0GcAj6jAv4TTy4M904WeMeT5zXGhDHX/uMUKaheIFG4gReIMKw5Xxgb66sZ9dhxp+0GeODejQPJcvVfGAwUzEcXWGaqNKm+7UeGjtZN1atfZEyrsdrJ6Ljyl4tBUvAphEHNlp8NpVuWWJGSybvChHukp2saUDxq22MQFtVuAtIg6ta+jyjo7kis0jBkzWMGNT6k5ivtaNOn3teSHrKsVL0C7q6IZOSS5Ohmoll6wOn8T83ITSltxIp12Fil5AtpoN/UYUN5q2fXT0BCZrzTaISi5eqkonfkmcgedGo1GlRFljan4ic3MXQN3FdONGPGaF7mLO26jVoY7rhhuFrdKTInk1+q9stBWvvIzqXwRa2QDW1Sl8t65rtLP/BJDXYOC+dimTNvJuF6fndY2tjdl6giM6UoIKE9gug7faYLCP9Jfi0ouCBaxXXslCu0rxWLsYPW/t7DdojQZ7pr/u0qmUo4Lqs2HYbrQrtbphw7G3lFDcl9MjWIL38+1iitF+u1GprFaqRjMqEx3JVwRa3mnUkuYxStx73NlbFAZy0H4Fs5nm/CfgslAknqG6DV67UM0bvQadXWfXViu9umPm3QzwQkYES/CuExW/uzAtIbyz1B19/cJErrXRrjL0G0gBZ+w/Xs/WA1dz0L50sRscIs7QpeXkrctSm7SmWXF/H0nbDOTzx+vYNBD6QTafhtnaK1iiiQnfDSM6VtONXnFf2TmsZT98rPLuhquK7LwV1yQil5rq+pWE+ANKUf6HR43skrr3eMe+BuDFrLQxiEnMotScoHHUq9OKmuoZGcXUtVqlPGa3hkGsJgfvV5oAxHcPGhvExOM6LyGt1al0x1WmNKlZTmbYyE67SnHNA71Ffkl6cdpn17ETbzrvcGfWA44WLWYz6Q1Y281NTngzB+8fmkFM8M6NPonXMMo34rrOUbLMVm3XNpZ/5aWlrRcEuJ7Dqz1fSMckE3VdOi2ZY+Rpfx2ZDKjW6kbKb9qaJOl2i8nsYV/VZJX24I8gUYo1aTQi+wd8dI5Wsz6e3xnu05Hu4fAxDDVakKftzJs/euX5i9euXbt448WraeatYDE4OHgZP9nW4xxAa+BulNNhbilk7WWUy16NPHl3atG2vSVn3dzcYnJZLG2W7hwXqHYC3Lxew3YFEqh6MeXNyf+vXz9zc3tjG3Khvd1lNne3iLD7UTZ3rTbys7IRu9ZY6izNIri+5bbMhVD0U7aXEqyrFEmuKdY1189s8M8RCkHvV7du/fjVO57Xbr38+htEVw5+6OnOI/xWL5lZNQpymc5+e2mTcrOFs1trr9PRO+BkVdPqEkpFDbCd3YexpN+8mWR78+rGzs6F228N+XzUFoXQ6/U+X8z9k1dvvfNOgja5Ae2e7gfJvbN/VKUzCMNVXV0pi+7uAY50Ur3VTWYPex+E3Q4nbGdPURQ/vH6GYzM30RGgOPgomqaltJSAphkpQ7v1sfhCs0atVps9Aym5q3MLvrFfGK/qMiN6EXCR7x/owXs/vrq6u7sm2R1HL9zdTjq6fG03oXUPZuN96W1yhqnNDoai5NIEaFqaBuTui/sTJ2vudlitCbV3elrE5HV9/aWM2k2km9fDRpq1lX2ZbEW2Nrm/z/J0grCjGYWsSQppB8FmQJ7inAt4L/TuSGRhgTufxuJK6j2AI5/BNxqNSnvJJh5akvp8du/simxSJpNN1tdOytZ2yQ+Jr+Oth2IuPpBh4YrB66gX71L5OCeZE+i33PFp/9hCZCHSYLkVdbwBr7PO/oFFa6tdqTQaSiTyHvJ9Jsn42prsAE/cnZSt7K8l74pJcJOW04grajBqrQcylDoPeSnNEENgaL1P7/a/9/nM+6zOO825FX5EZVeNlkjViSZHV8dXU6Rl9ecA7tburaytrkrYthd/aAFD2fKLg7x6W4HChnV9Xg3PQj4pfPKPj6Lid3aWCfW2XMxb+/tKlZ+SRPOnEk69E6itffyDc+fxxd4K4U3anD3CI0Kkta/g0Z5hCmedcRNoX4yKfcipe2Gjb4WDeLTVPRlf2P/y6L8+UVtPXu7vs7yxhhYU0cQwli+/wjFXXN+GCalI085HHRWAct9hI7zjSJkTr3W3VkD7iZ+RG36efXNlf4+7OQOCKRUz+USvy/wDTMPfBJgoDWsWqDexrcvtz2ZkDiUFmi58VM9jXVv/c4Bf/PJncC7xLhvNJLa0xSJNOxd4rFdfApgtIW0ErZf64u/eIsp+VLSb0VLv8mnLZD+HXz366KM/P+C9x/r0KJtY8INriycZdIunneYRWS8Xewv9bVF91AcADVVIu/4p+BnS/mVSzzGSy8Ylq5JmTr5tgrRC3RZ1oCMvmnawIxAIBClG4Bppaexl0UN/BQJD8VNCaZ//GB599N9Q1Z9Ivj85Obmyd3ZXYnKxhUpap8tTvCMPTCX0ZicsvIP05yFwHglvJwwIfZrsPMCvfgHwpFALVibJp5tM7Hoan3k3bOiLIk3L9bOpwnRdzz8b7f4Eiuuc54AGQudS/OrJy9q7+PUfPFUvuBuTst3EEWTRAVwHyo5FSqA42rHPrx4k5zYbTA0JTH3LIW4WqkC0wRvnD7KV2qfYe1ArO3++Xqj7xKnv766tSrBCk7gwh3EmK+YofF2ccVOvhkgZ3tatVpsI8xAEqVS2S8cl1qJXobOgF6IHGXntE8k4XlubzpoVuWz/LMu82XmQxKjBESkoJ0+HfBYGILrMrTSTBApdSFh/cEraN2Y5Ap+OWdhP93mOPC1/ycSebH98lZ0tt5rICZzQ7S6KN/N+yLqssUGi+YACt8L6NI93hKTIRQ6BZQC9+fgBbxT4+Qz1zkJ9d2WNXaOwkAv9yl8UbekQWG1O5NvTImlmFz4A/3M7xdsdIRcpdnJfPO/Qlf1UZp5Vv7PIfI31Z+hoe0DtK07Nw0DWmFP+fABMHriTcm20f4ykGCUWuAms46srYsgKsCrhiHvg2eKsW0rNgCa1uIr+0gmYBS6lXCVRdE3J83RMUq/sni2U9iTx6txy3OVYkbyXoMXB522FZjPM8EIEPR1BgYsb3BePZXBJ9vIzTcP4OInm5Doj+uJ4y7+GNjXwJb6MLD/hnZR2x4m/KzFvLMaaCpY3Z+ESzNe7p4ujLZU+E4JUq2J5eRk8qNVj/LvJTI9pBkqdu2Ag6z5buIFPEgu3QGisSDVHgc9Bj0TN9c5s7VawNTlRqfnOkvHFJY6SJ6u94NidzE80nTc51AWueH7aeWoWeZCNUqZEf7UXC4DQmJ8vb1rvIxpRYt4YHK8UruiEN+rjDXmx4mY9OpuPNWlMJo3GE4Vo87TQadD6eOkNvMkK7d8U7NnOSkhSGRUh7vwgRaiDNd8m4tldEne6r2R8/iJHJrIAc2LXfn6mmbyjcCOzB3QIyIOb26QSWyZe3TWGws7sLPmcJU/ZiFv+SER6ms7bDFeLdmoJ4tKJxLrDUsxHWoeZ0M8dwQojFhmfikpQBbwH+NlkkaCkwWC4I0yxrdMsYNAJbFhKXoY74MkCBb6HaartrdKIm4WcIPePmVmiDg5TaXmb4OPzBdGe3MX4d7u4iqQgEN4bbJgrJW8PPFlgCB/HTOOz8tFGpw/QEd4JYUpXQm13wgeF0Z5EZ/hcMesNWZ3Xg0BtQ5jS+8igUG+pmGMkO1eYX9sfH4AirJtmfGzzF/0Vld4wyMV7DjYpWk6FiefvLUksVwN8XKBbW7FAdCsLb7koFjQTiW+99+mn/x6cnZnZDooiTk3ABWqIkVL6r0mvtARlafMAr0MgVt6vw51MryangoGgnmHk1INXWOW+n7b3/Mevf83FbJG8Z2BHWjU/hK8C75NlGUuxMo8CPF4g7dpP4Z3MdRaqY4dc0NT2+s5s4AHM5QFuiMn25ffw7zDDiLF15H1msKpm/rScLLjffB2KbSdgtvabwljLZPW/hefSczW5dI63eAATTC4xyoPsgNuXX5w6depPKPMPRYVDahM2q6qqahSo61igfR4NkWGQw5JubiEjFYVquUwWgnczaG2C1cYtnNjIKwjmECMF8L0vvk+YI/FTX0LoE7cY3nNwfZ5MVtQEyDfrY+9+RValDunaneQi7xZKu/YJeCNd3NQGLNuSc2gs7xy9YSTwO0IYmdvIvxAKxUTwlm7AzDyZeK4ZZP/L6P1vk7kA5yEmIrrZVY5PC5Z2/Tl4Ic2bo/k5rDZUHo9FoiaDBFHrMppuFtozHN1Tp74Aoumnfi/OszHoCU4rDojjmZnYWDfR1p5CHRxZCIZzkwVWJIT3B/BJWokcRAdLTsc1dKJgBUsUdjIFToXB9sUpPr5AQvl5yzsAAvLTnMTnmYTIxyQuVCynqSDaZFDnN9/uFb7GJJMBpC0novJa2KkA9sxq1sTV5ErTrz+QcGgp/CcmoPl5Y36+Q8mH5hdZ4qfZA2jaF5N0R60FzoLgdXlWChc2mvd5eFZo3nIUtwYOunvcXIR6GT5MJ0SRSAd82n/4o6g+MpuuSeVDi9zcWKJVTNPuSB3RM0cB/g3VvGW/4IUWGdsfjwpjDwYZC7cWjLmzxsm5NYsLHO4ML7COPL/HJ/4kzImI3wHgvMUiNw9ck7hVtJ5ekKhJOmAqgHfv2uRhtLz+KbgltFzKBqblg/5WYkdFN7q3NO+HVx9AycH3BWo+m583mvcGoSoPzLPEa+YTmkTTejc7omMVTbwb3snX9M3J+2uhAiMfzcH+EQ426DaBwy/QC8yxMbZRWFn87k9/4Jzan7ZhSsTYALV+0DpaJBtOq2qeSV4Brd8aIy0r0UlMMyYsh+P9eFpoRvO2SdI2VYFV0w234unLRuRqmSXy4z//+fdfkuFAMVpO1tiTWjHEbVsaPHAKNOkcelDPxMazAfhLwaE7wVvogcllSTxpvD0ohFvZS3QqmEhpQ+9shMUMiVBLKa0IcAOxCZ+eIO4nXy/WqzsLrkcSvD9Iz0hQz5vVINT0FrS6OzlIyeVYgU5cmP08Htcz+Roq3PlTY6CnT3Mmzv+Ab4GkniJ352G4OZyen0sfRkWTjXIT7AcwSzSwnTswyxmy9YTBCCxCzVHcG6mPBebZ7KVqnndyOrZ1EcRuvm05pIEj76U03rPbmKm1H5g2O2rnETPFKKbxQM0KUhv5UIam43morbfxi8UJvPDCO8n7v9KkxMyRm92d3BwUlbBTAeJWFPJBzqzDOv9M8kUua1vkfwqdmwOs4pZhPPnHl7IBy7H0zJt4NjJH2tyiNrtMGq7T1VGSEWU5s5Oe8DKnWUVXLPLfpaf9mDyIGoMZ/xgePxxvyEhAZ4E3dNRkulq6yexNTNXSTrVYwxVmggSXdr8gcvxn96+HEjjm55mypMIkNzWbNJoWNUlZt0tEW76Z5Q4GFrkliNMC3r63RU50jq8AfHAIC6//DXydMYpLhddT3nx7pkSbLpgLABcyTsVwSVtVlcDN6IMiQ9nZb/5yKIGjY5uiMnu1VHhpm6xub1wI51lQFY+Z7Bs4mHmWd41ghJfWi81dVveh4I6gjBtY9mWZY5JjpRhgAlT+/YIiIc9BWyo/nZ6tsndjSuRjQ86uPHWYVUXZ5FW4XeT8lggw0vVc23XkzyT2pwocPZbDNlGObVWybys8aZtcqf0j7BQ3ay8CZGkpw5MfgBO4MIZTF0SmbKuru3cPkbxM7l8pdtg+L6gAOvKp3ClAYuFlXnDMBMBlUYo+vnf2t4W6tpXJb77tsaanqqWmHd4AWH9AJyUwOMjW4XzPJg+DTeQ0yPjuGsDHBfGu/dYRIv2B4jdF5gTDoLAFQ6qZGEwsvPAug/6kgC0Zq08UpOm1K398A8tN23Kpd8rxQBHLzm3aLOSn58nzJarmU/ZGuy+DTSxtBGr6OZHE6+vvfswWHmRE/ogsnJHOTJHt83lua4AsMSpQ0Q9qOibiKuQ5UJImLKPOyfLq+r6sXnbuccL6OwyTTXA0Fi6nwliHrOdXJvnQPPfElCE3Q4jTNBV3iK1EOajRWs8d7LDIsbS8t3L3HITIJt17j3yHt9WTrS1QPOsOsgQlLstdrFG8dPPmmetxv4+W6/Xxrc/eKXAeQLMM8M7fJmtlK2Rv4AFV8mqFbL6YnPxm/2/Psnuy4f4jjzxyDwU+hq9LzjqMERjWxRWwmLNd2iBX9Hr09nuBjs8tPViHFkRbwu5qB8dHq7v7Z1fIpkjMTfYma/fWVtb2dteu/O2vf4/aQgesH3nkaSLwVwHmSqjpmOR2sFOLMyIW3FgMVSne5Ka7kiiwU0ZgIWslDpfFvDo+vjq+dnZX8u1H3175u+eqEyCUOG2v2QlPs8TvYQEwNlO6GltOUR1LLOu8/iyFwOlLNQA3X3x5gEy32gZ62w6z+aYpsQAeCg20R13tZqcT+YZ499KiIUuR36UE7pt60FiDeM4MJQ3PELFNbRT2zAD3JQWWvIprElNLd3PToXccNQlXRJOwWR0ucwu3GRk94D2W+H1wSmIkzC6Jl082zliwdswmVtPnCi1f6aHHbgJcuXZYwgdoNlnaXD3OBGGHs91sVgsfydUGwPJGl97iX4dtNr84pMiRdHDiQuLL1icCBZ6Hkerj/pdLu2nW1GLK/rSkpuWEa7sPDjNMBeYwBM51HKLiZigmnJy+hrnZAE/UjFTUhJPUx2xFeo7ueQBCmIHT9KfJclrH6cUzRORTEx1S0gZ40ERxCqRnEAhvcpSn5mZRvZkkYfGs2Y4g0b8j2CSdDb0J13YfdXN+cFBx/Qw3xLSztBTuCGLuyj6EK/tQNdslkQbDE4n5n52JsJR9tAGTIC3Nuw2HB73UL7lR+q2jOdACXCy7h+Ker6nBVPH6Dm9FESW4PjczEQ4HA2RukQdpINAxuzS3A3zllvPaY2LlfMBbr/ffLhvvpMDvw84it8ilmFfMTmxC8pmCCVlu4Iu5zaWlmZmZ2ZmJTcG92d6ZCEqJRSc0uwAh8+HzTd8+0ie8CNDNChzFHRhSKJLMhxgmEAhOLM1szgk2PWZge31mNihPOsLiang9HUc9F/sE4qLBunTMrKjA0Hzy8UyDQ1I2MBHvRjHBcHhiZmJ9aurguZL4ehMFHwyy7q8otikwjP+t4p7NWhDU6NLvw+ukHTk0mFjPrRkSLPgwDOfdUAmYQDAQlHMPHRTp8MXD11KSkWyRYPO6H7ALyc8sck/SVFQN5VyGEDeUfggw0tgN4VPCjhZktGGOm2CTM/OJx+SmJm3KBOIO/Z+Vz69JWIFvMdzqjnyIe7SmQjF/uszEpYyP9pVT3pIovHowoCUPcC06hbBZVRbQsXg5eWsAfsIbTJtnJa6omS8zb9rH0Avl9GsmgPf48yYJC18st4XTUl9su7ClxKLggvf5g2lyNoqjW58/0hZKFjC031r4mtqh0Qtf87uh8kAiiA+W3cIZar3kG+JzQi14gBIBN2ajKDtv2hf/cbkKcPYxlD5BYi0f5PS8qtyRjI75PylfAHfBTtrYPduMVgzWlJk3TU9HPitfgu6Cnmy8SepyxE3xNNqxyBjpVx3N8xczYYFbabuoAslytKwCp+PkalrKRVvigdfSxxUHs4yMHjltvT5eLsoszPBhOu/TrLgxdSkj7VhsrKy0kXf6oLH8mRq2J1u1WC4D99H6+PRCuXmn9wOTjq0KIzjZ3sutEB7RIAjD6PV6hnZLFsos7zuwLSDNUBSboiuqFItMYv37KIdfaCYW95XXtAkW7gjGkang7ERwkYtji4tHPtWGOZo7Nh0ps6gJxm5D6tkElJRsDuJ+JZNicHDxaP05eVQ0GvUxkEZExhI7WWkpo/dtsH2PwUT8PkreNJlgiR8PZ474V+xID0Nov0ZoT3D5uaJm8SjMmkn8/oMtvf8YSRN8iIGMppmtLf9VMtwEAS4/r1o8Et5kL2TMH1k4DpsWYOwGKUSn3Qtky+F3TwNcItP/NTWLi0Ol5o3n0zOx6WMmfAAn/Pc1sotkGeDpp7+D/1msqhlcHBoqbflNk+dXxHwnhrQk8Rhjtv/jJI3we5fmA88Eiu6F8B6CTXRb7/NPRyLHTVWI5BY5R5Pkke/g3v/K5YHDqDjD/bYW7jVDFjMSv8TFHXN/Fhk7boPOAlO7FXo8pAT8v/sQyvsEFv7PuV9Mw/2hMOPU69Fv4R+G1pOWtt4d8fvLnHkfChZ06Fl5kydPYVKpx7yVPLufYf/H0D69nvL5fFtu/7Q/HsG/45EFt8/v3nJPT0fi/vg/AmcCNPa3hesQyI4h1QMpINzonHz4Cv+KuX0RfySyMLYgyTTbchcZxUMD4HJjOOc9qp0tmdAxxRh/PBafdruJh4qPnUSDLQJmp0cSn6b1rBdG/no019hWzL0Vl8RRhyX/KIpbMNTo3+LuWEzui7ndevfC9FjkoeWagS3/mB/91LFnkxVUUEEFFVRQwcOD/wfpX02x8YfbNAAAAABJRU5ErkJggg==',2000,
  '냠냠박사님 모코코 귀여워요');
//   console.log(p1);
  const p2 = new Product('쭈왑이',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAABsFBMVEX////O/JsAAACF4IX1vob/56/S/57N/JnP/JzT/5//5qz7+/vS/KPQ/J/39/fx8fHt7e3a2tpeXl7Kysr//ffn5+d2dnZ/f38dHR3Pz8/X19f/6rfCwsK0tLTU/KeOjo5FRUUXFxczMzM+Pj5ubm5SUlKXl5f/7L//89alpaXq/tW75Y3a/bMsLCz/+OZmZmb/8c9ZWVkuLi6srKwmLh14k1v5//L/+u+6urq+9paTk5Pg/cCHh4fz/uez24fE8JRhd0labkTp/82ewXeHpWU/TTAVGhDwx4m44YpJWTcvOSSmy32X54qC2YJttGyu8JEAAArW8JeOrmvg4ZLty4rn1o7h35EZHxP1/upRYj0pMh9xilXN48ywxLCr36iHxYal8aV5gXNai1lfeV0pHio2VjWBon5ibGF1r3U+Nz7L7Mp6x3lLekl6m3ctMixKbUeu0qil6qUrXyrB6r2f1J3J1sdlp2RJV0Wwuqi315QSHwBHWzEqJS5BUDiNmYi91KbBwHxmWlFoWD3XpXWKbE0iHBOphl9PPiw/Rjqjk3ykwoebfVhXRTAVJgBrdGSwwp5kZbEpAAAYc0lEQVR4nO1dCUMbV5KWCuhuoftCB0KodSLRQgiBkNEFEsIgcMA4NmCcGWc8nsT2JN7sru0cHmc3k5nMemZ2//LWa1196TSSJkl/dhwOqXnfq3pVX9V73Wg0KlSoUKFChQoVKlSoUKFChQoVKlSoUKFChQoVKlSoUKFChQoVKlT8jKBfjsfN0x7EdGDdAICwadrDmAZyAM82IOnST3sgk4cnDc8efWKDwIJ92kOZOIKQ/s3MyfOFt5ByTnssEwZ6/G9nEI8/BXAvTXs0E4UH4HczDTz5PbsRn/Z4JgjzBjw9aXJ//AdIJn3THtHEYAoAvJhp4fFn4A7+atb8AsDnMx08dgEbnfaYJgSMc09mhCg+g8ivxOvTcHBHxP3xK0hmpj2qicCSbMf4Fr5yQepXIXFcLNyRcJ95/gx+YeJWkY0zIDP7zMyLMPh+MSWdxVmwFYKuqN0uLdRcUJeZfWbmD7+Yis6UZqGFUMSasQq+Fzz7o5z6zEcAHvl11ic24r4wOzEgmTVWr09hnEIUAAK2UDScSvP0WXBFW3HcDhsv5NRPPgK3VN44FufnHOOgMQT0Zo3Fas24IOLmeQTwz0LvwBQGN796HUXrF3+4+vKMTECqMV/L8FLB7DO/BZBmuZXY3PzKWBgNCmsqkhR4MNv8Z6fzCkdsLbYmNhByj2qyzx/fISv78Vefv3yDb+JFu9Ptlkc6nntS4kuOlcUpc7e2SCchGVoOhX3RaCAagchy+xXb6/OLsZhD+q6XJ0JqX/3b73Hlp8waM7g/UuL+6AykPr82Nzc/1QWPLNyBYCjjc/os7S/agLW1P1lbnJubk3DP1uGpmNtXv/n0GUDaaoe6EvWT5/L1vjI/N782Tm794AO3T5Z8ChDytj9xIHepbz7/d3goTWSPn0fQ9CxcKGS4mZNXEJL+lNj0uSvknjCEOk6wQuw+J3nFJ3LuMyf/USChQinDzTxPCyMIjzVy2enG+RS4ZF9LwkL747W1GPH5bfErcKk8ldv3P9Hy0sXQNLsbpHp+bX5ubtGB5LenZvwFAc8WghBpf7y2jdTnY9KX2OCtQjz/HLkr2P2rYhrcgqzpiK3HYoT73MrKOqa6aUU8FwSludy8Aen2J9uLity9wNblAf3xG0XuDk9SWMNux+Zji4Q5wfy8wtUnhAyAtMjwCXXIOuG+KHfLKEBdLuA+gofyCSkuAAhbF9uxOQmm5PXIXfqluBs6jdVtYqCYwuAicKCg4F7K5uPxJwFRlxr1goj7/Pzi+rS4u2WBHgNZe6wOfpxKucgKZ08VJZwYLz4FsIne6MBltNjgvbi4iEveoZlSuPexIN06QHduF2a8spFKm/bLNl/3Jn7nt08AgjtSAYFJY2Wlsc6nmuQ8bliWfGkZ+IS0to0jW1nhuSu901xws1983ov9i4dY5bgUexYkhE5X0SLMwsXNwxKEgFmzHltHrMRijfW+vrbi2JYaKYxCDv6opOMIXj89ACh06dYQZTO/rfy9icHJQlj8FTMLEb1mHhfjXCzWXJgrc7FF/CMhr89h/X7Gvnwto//i9e8w1bu7b0OSWD8/Dj7DAK0s4e4DtqBxzM+JgnGXXOTMJImOvag1Xb9Z3N0hlaGb7dGTJ0tpcdqdC3MICp3P9GaLZQHYDCmyFKBQblujyykk+rvT01ta/I8+eYw67vHLBvnUTka5oclznx+Uu2lcO1oRXshYnHafz5cKbLhZFgJejUx+kESs0GpwenzpIMAbP61tgjaWE5fOaCTZ6IUkA16lka91i6AKcIYgMpbuvikEgZBb1LaBlEYzT+wuFJ649tdlqc4e4V9ve1JuU9dqGaOB4yqJbNZuCbOkD+ZO50wy6y+KZ9KsNzm99qWc02mVvdSLP2Is+3mmJHQQSdkKy+FgBmurlZXtNcdabL0R5le2FdzdEiBveXN1zRm0YtAIg7+CU+UshPkrB6ySNzvWBYIpFRIMwr0sMTJqreDNEydwpoLpsG0nHs/40DmJDGlIEd7GjkaKU3qf3osm/eyThEGn0yrCQPvzRbyaNWNDQqQNZhFdYKXjRQuifqFbIjRzOHXj2tTx6bteeW29G3dchPD267xfmXfL/f3FLHmxJ05cJCzoBgmxrbHmCq6oc8nrXXL6QrLuVkGxtz92rJF4r6Tml5DL15V8T+aEvMGQaLzBHsd0sOFTiHsOcaWE8UfygoC4DLx5mOzSFUmwRnxeHt4tIRZc9ryB7sddS2vpfLbxJoz9blhS2JnCwq7D3gyCxknjfSCoL8aCAmwoeP72uoIG0XtwNM4i5+9PnadP5x3NK0SAjUtorJFmqEDZL7iltVU0Kev13TBSCr0rTbOrJrH7ThLNd2kwMgNRJ+yNXMPzTSlIRoQRz7GGdQPPvTW/adiQuEZo3GbHnxlW/DrxenHNgUs9ZdLkB2bOs2eKjTdH0fKCazl46UDEQ2yt4fc2CIn9zxORJ8gbRrglH/T8nw62JV2VJZSqGkdigLUuhMGYb7zdJWiMNJZUQzJiqUR+jiUp9b8oyIrsmwb+iKVCweWyLbgCgaRgoh3rwuWud/KrL6Edjjpa3lDhL2BegGRbpG3zVRJpWrXqYxfLSlJBEJJiXXBT0JuduUI8nAmE3QJlBUFPt45KBhOV/lKTH5Y6ifh53u9NOwDtPL+9tray2FxSxNl8IO0m2HGFjYd7RMjY5nYt5xYK8UzOTJpVSuSd/In4hLFNnRqM+CrPnr7krxECm8Cv1lA5eVwY3l3LUWtalso9MKYTqY1d2EjAlfNFReXW9npsTqGrYo6QiFjJt/X76uFA5Gv7/MsYJkEmNIeSvXPN9RVibV7Ik38ka9ucHFeUN4VtC1YFqUWC+7rc7tYg0VxF2ti2egmOu6j5DijtPtv6mOaI6W2Qbpcr26hrsNxxBcIBFPORuCTB+SASnYyg9cajaRs69QrZipFzD0DSrCkajB1eut3NUh/LU8weHLdfQ/MaN+nuFCcr25jBg3qTxmyN26XdPT0K4YKmFyzhD9K7Zqd1KVNIBVrVbI7vLMjXexzcFk2WEyZ2ahU2yz3JU8ebsC/wDdpwSSTChmDEGETk+6HNoUW6f6+BKLg/ZE2kOqVzAD9GbcHvE0q5RyGJ8TlPi0SNrgoPe5Kn9q9KomVBMwmNBVVkh7xFFtzbIG0LKCyZnd0O51k/UOyj3AgUgjs5n91JPkF3JBsH0uY5hmcXahpp0UptwVW5p+Ep6dTQCRyyK9e+8g4Eu3T1+HKR5FwMyK6luNUkex36haIWHxhWr0nTijFhCFqxssL1jiJTaHobRHCC5XKuXNrb6hvvxNz9l/hjbO0kj77WrRkZYTH3bbS1RyoYdIqsXPhQ6gKYXBski/FHbNZXhEWMndeil5xc1MgN25e80WGBUGuv18JCoMuZS3R5lJhevTMebUejlOD7uFpkR1mGhtls9nriO6EAv9ybDWoU2R3yEUg7NcWhpWwX8pwm4G7VTk62q2DXByHUmha91RpfYgNJwTRZxTMxGvOdprDAlRW28qeL5hpbpW19gzLerikOV7z1Il/JtXtw9u5+uyxtZDgtAn1rZYVbXubR2tjRZpRP2XwmM6krW2bv9FNSmIIdl8b+rJRB6cQLgzZYoVW0eFHTLFkVvd7VPQMgdVFhH4+M1tjC+BbOWZuHvFfm1vnial0U7ILEuyrt/EbpmMFXOU1pt7ZqVXGm+6Yd4MzhxiZGqJDxiNMV6VZ1PX1tDgq1vzMIvbbAuiNENh9bcJDjntIGpZVsS3fym251q7Z1zugG408dPwQ4gH1G+Gqqc7DFU+jUU+lCqmPpHEafrqfuI8KDAxn3iGnelBRtFZOZjkmOOC9DxNIuXCndPt9Hr+1VS/2zG6XdO+APG8NRqcmeMTBa3YGg8bwQTUdtwSb9zlB2emSwnFsQCnxukJ2gGAwYTdtNNL0zF9yRc4+g/Ei0yKzuQ/3g4NvadzjQ8566hie69zbAunMW35sLqK3y5Gn0IB3Rzh0gYZPXt2QDm2D3Kd69ZeNlWbb9fn169A4+Lrhlp8npW4osEHtuEO4iWecktWvT7NThJlygBz9KVCqf1mC3j9vrdiEU5Bem+dGfoN7Uv0amrGxTjyCO5xS2slrICGocfaSTCYdGtF0987tCGdIyF1XvZjeOvlm0MzVg2YbRHNuPalDtSZ4+PENp1rRK4g3sNb2e4VjZSUspUNAudFnuWE2zrY8tkR4RsS+cTdbpdM7jtJIhrYj7kzmynNDuNM1zP2Ch5bHvDo57ctc94Wc1SUoFTeL72gHFb1RqtVyoH3enG9guL8HQy7adPPVh1YzV4417lryW9vRJdqG8ZC/CT9PGu7S2xG4GeCdZIO75/NvzXtzp/DNw8RvbZIPRkdiFY+Pde8a7DG38Uz/uURbYLmZ3dxaMd2HUMDcgSKWVp+8+uP3x/QdViOAScBP2aMuvv93vyb2yENA0U5jNYy5uwX/d/nh2dvb+/fv/fda7D+csANuldMc1GmjOihkFjvLGwg3BFHRHNA9mG/jh25wmhyYhKWnBlIKePk/nz3D8rvBCI4F9uwl/bl5m9h99QnMcf4Sy2Z3Q1kUmpB4cTxu3CT2uzVhrzD8SF4smgV3GGLMRuugp8elv3jYPVaYbsfQvrcvM/tC7GaXH10eUq/qFTupLQff692ZgSp79ONvhTvRYhoVgzkYES6e0o4RCp+kNq0/OGsbT5/gc8tf2dX7qXXljEusWEOIt6noX9M8WHwgrnLVddfavf+FjC9mLzWXgb990qJ/v8v/jhS513BA91PuW6DYtRYLw06zA7j3Xu617fWq2N7083H1+bgxYZXa4z/4ZZQU6o90NwRS4OkdtdNdwSGl1x5sYAahyM+/T5xeteg0r5Z8El/mxZ3jGor733OBkErcb+231BaG90PIsBBacmQzGmXils9ypfajqqFId6lodqrm95grYh7+5LDhXvpCIOnKP9FAk5uBCP16YbcZz/EoECffZP/+IcQjg7K2nKDhhRa3Cxd4RX7RUdwGauY8qXbvfJgOkUvkf0UX+3nvgJmegTxBzRgMTeJhCEH6YleD++buvv89XhK1LWruFvA/q51ixQr3W0jwUVX7/2e+fpXyvbouu8MNIRtO7BAt8EnfUA/xdyv0eRXO8NhWCOr++rpa05b3dq/1DQYFHGStFjrsnvsI/RHXcoIj2DQM3Cw+wJSn3j2mltiXFR3m0tFYnVjxkmu6J7f7jKEcKzI1mqkZvmtDd9Kjmq+Jxz96+N3TDlr4rvsZogcq0EyYJLpVMTuaJOUvAHusk3O+OcPhA7PR/OXsy8ohMMAHX13vNSx4XHBxKBn6/SX3ws1aE/APBFVAllJ5EIDpa+Wkb1wnbNnLp5hnfell7935nrd+/26I8XL+eeXC76fe3b/8Ie+XrzSNg074RwrUlM96jV3YX1kjpneV4AWoY2Zgm+dsf35PG98EtzzD37n9MqH/8E2xROHVbdRjT4fgPgB3FSNMkUdhFsUozD+4/uPegY/PR2NO04d7du3f3oMbrPqq8j3518XVx2nw70GOdGG65lQv2msOmaVlOH4k+VcXV3tR9TPVocxPg3atp3z3TgMkXhGTjDCsOKPsZXH0oXzEo7RF09q0pZrV0fQDwJvM8O2XimM9drfvaLosoyPz7ULtZ6sdXUBOdXKF0x+fo+t/tP5qu8X3IHJoFct7AaWkDyvTBjpINSL1cgwvpORVKt1q92jyoVRNTpO5lWx2hy3yFI5uPFHLv3YgeCrrqBeyuSq/HEOPvXwBsfTO1e2SX3ZDmY1z20m9sSHbqGA5kYx0ZFDr3lUHhcgyjNVavL+D99/mpMNfvNJvdxbzg3CizC/WbIk8domkppVxhRPIUOsWXb94Xp2H5ePMBJw5OWKXptqDee+dpcOraa9hV3rtlyI11jK5UA/iemzx1J7BeomaK4rtBqBLUD4Y7StUFutUjOOr+bb/RgBnvCuBPzyfOPQI7miz6u/QwFbUHD6s3Qf64Ble9ziswRiyOjBhbv3s1Yeo5CDgdHGeUSTfq+AJqAxwz6ANqF+Cod+BgOCSPqm+z9miy3APg01Skt3cS0EzpAOr9T0z3Ac7gXu/Dt4Q9phcd5oJ/TjTRF8DmyXY7SbVah4fHZcUAPSCYY5QJfamTkMe7/cV3E7S8EyDj6HqLJ+amTfa6xIxMHhUSO9jZUwahrW7C1eRK2yWImqS3wQhFN4quWu18RL+nKCxVB3wzwxhIrsPiRvn22ZuHPuLOaBROy3aGr63Dxe6xbpRET63uDUydwMAwuuPx3xvWAuZ2UzHRy6WpEmbe+tHh0EeHMa1fY7QY0mVwkfxzQpnOhrk9rxTkBaNhSI/lYXV1OBYUdb4J9eGIa8mx0yv434lQt5DHczr63d1LarCLg6PqEMfGsTRHrXLUP8DLf9g1wEQM7yRHe4v9mZSrpG+7VV7VDbTwKR1ZKLA16H10oveW4OCLSWy5eSFp0lT6ZzCKqh5hlX1R37veKqP5dVQXH6DJ9hTp0MDm9QiSENMcU0YFfDkB7kvktNJAN7RTGLSPLjbRmpt719Wt4/NSqVzWMh03IDOCn1Grhw2bH/LfGra7a+Trx3cToK7xQEBTHFC4UDqmvFe/6Bx+3nxYr+8fMjqa1iFWz6v7e9XaLvnORa3aPD9s6Ede/n3U9YFJcE9BRuMY/NYASne4en50VLs+qm1e8SRZ2Nx8+cenT68OOnOyv7/aLl38+T5XZ2TkqdW3yUloOxtyF2d3pnd84td6Wac7PL3z4vXrp/WnAjd4ubVf3drfKoniIZZofchLv0AXz9yT+FUNBciJw3y5Vut3tyfiVucxfa8/Qqu/rL3+6MWdmRMal7w0EdDMkLecGN+Te1DHDtMyFDTCJ7aQluJe3/DMnPIPLzuZOeE/II9ya3x0qkxmOO6679vN8rGCPOpDqOYHa0zfOm3ypG+1H819S3vC/9ttugamTudtkzlf4oOQoyJ0SgZ1aL9xEsInhM0twUPJT/iFcDJETusiELh38meXjwXWCMSzwtt8BduFPcgjSR2jPT0RPZCd/2RwIVdeLSloRJp7xY7/5GADBUg6RU5/fATXfRY8zXv3rdOOv592PH9QUIdwsLUqvTKTf1X48JseB0Ua3r7yd+af7JrV+wW7W2Jjn7S/cDIwdbLtA7ArvuWINiQsEcljbceJOLDwaYnzN9Y8xdQA+vaYmNM2V/KPrjkbJ8phXhmkXDsQlXm0kXNYXJCa3C+kMWVskHS/2T1epRhKV64De90/J1EY5U5mTk/bsZ2Pc9Qwge7w4GJfFFjILeJ22SN+xgx7GOAMoHa9u7q/CUcK+86MTJ4wt8ji1NKt0M5zH3yxI44xrAh+Eq01ZsmNcWN+fJccHnvoS3LEHzW5YiedkYvuBtop/XTY/MaIdQRtrGjIAe0p/NqxJXhX2qpd1I6qQ/UkeYnTCA7DBXlteY9scNOtOaW5rCfAdr0tbpxwJuH//LpymRmyG0s8XTANQyS4Y7g4NtIJI7+WKCr/KgAQyU3jV47ZgR20iBfhtKPgqdMuYl6ZewnqV1o/Z2RoimJK75/hipvSL1uzQqTvIyiVoDsV6LhhEpy2vAv1rTKn05ZK1TdvAQKeaf1WzSWI9mzRd8XpUKFdAKp8hLpid5f0wNhAfIq/TtQFr0bjPvpZS6pMTpfBl6zb3fsBRmOGPgD2kdb7hwDJv//U7jXn+jy4asywBGFp4twxWhiMRfJohWk8gLcNK4Czz77UeIBpHbXcVH+FrA/Adzl5uzNEw1dy472Vux/MITBruIlz51F0TdfnsZrRaBL0TT28aCgYvxj3E3gHQILuVrCME4yudjZ97vzTi2i+ZjN2rdtuHtS7Kft8AxUtV2EMWqPRaDDivwztN/iNjJGc++u7qzYquMTmNOpWGbIJzlA0JvzcZcWPHxrzfo7hjJyfPOzDgPAbaeMHKDkF0JxDk5P9PrOpoJh1ZBu3b2Qd5O9ltugoXhaLFc5f8fvRC/x+dAmmgZug7ie3Ck1Ryw+ES40j6yhmNQmO83MGA/41GP0MWR5kRYz6ZD9jIvGvcaPQgCDukMhyiTyHYBjiDUYDR8LCcCanaYbDyfxZcW8AV4bDoalcZivFRN6Q4GgDzZHA2OCltKkuoc4VK5Xp3x11E3BUElmMkbwPaA3+vgGRpqd5a9AYkL1M5DE9cEa/gdP6+V+30ZkDDAt89iQq3kjnuX+h+yFvCA4MiZpiAmfAoCWRgNYyuK6NGBYxNPrxr4EIJ9r/y/B2ZWAQqxQ5GuNAIu+nOS5fqVRwWhIYIf2J/CTOj00blwlMCPl8oigw888wro+MX7J3q1ChQoUKFSpUqFChQoUKFSpUqBgK/w+ENvD7eTVQCAAAAABJRU5ErkJggg==',500,
  '아무고또 모르는 모코코');
//   console.log(p2);

// 화면 가장 상단부에 들어갈 장바구니 총액 정보 태그 생성 클래스
class ShoppingCart{
    constructor(){
        // 장바구니에 담은 Product들을 저장
        this.cartItems = [];
    }
    render(){
        const $cart = document.createElement('section');
        $cart.classList.add('cart');
        $cart.innerHTML =`
        <h2>총액 0원</h2>
        <button>주문하기</button>
        `;
        return $cart;
    }
}

  // 한개의 li태그를 생성하는 컴포넌트 클래스 설계
  class ProductItem{
    constructor(product){ // 클래스를 만들면constructor를 무적권 만들기
        this.product = product;
    }

    // 담기버튼 클릭이벤트 핸들러
    addToCartHandler(){
        console.log('장바구니에 상품을 추가함!');
        // 이 핸들러에서 누른 그 상품의 정보를 알아야 한다.
        console.log(this.product);
    }

    render(){
        const $prod = document.createElement("li");
        $prod.classList.add("product-item");
        $prod.innerHTML = `
          <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}">
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>${this.product.price}원</h3>
              <p>${this.product.description}</p>
              <button>담기</button>
            </div>
          </div>
        `;
        const $addCartBtn = $prod.querySelector('button');
        // $addCartBtn.addEventListener('click', this.addToCartHandler.bind(this));
        $addCartBtn.addEventListener('click', () => this.addToCartHandler());
        return $prod;
    }
  }

  // 한 개의 UL을ㄹ 생성하는 클래스
  class ProductList{
    constructor(){
        // 상품들을 모아놓은 배열
        this.products = [
            p1,
            p2,
            new Product(
              "햄버거",
              
                "https://images.chosun.com/resizer/5jStJ5InVS4u3iHvEzB8y_tGrr8=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/HV765ADF7VF4FLG5KISDNFMUJ4.PNG",
              16900,
              "꽈뜨로 맥씨멈 스테카 버거~",
            ),
            new Product(
              "애플워치",
              "https://img.danawa.com/prod_img/500000/535/481/img/15481535_1.jpg?_v=20211215103510",
              400000,
               "APPLE watch 2세대 2022"
          ),
          new Product(
              "애플망고",
              "https://m.thegiboon.com/web/product/big/202104/ea08c22e8939ab1977487abc826b8ab8.jpg",
              60000,
              "맛있는 맹고~ 당장 사먹어야지~"
              ),
          ]
    } // end constructor
    render() {
        // console.log('render!!', this);
        const $prodList = document.createElement("ul");
        $prodList.classList.add("product-list");
        this.products.forEach((prod) => {
          const productItem = new ProductItem(prod);
          // console.log(productItem);
          $prodList.appendChild(productItem.render());
        });
        return $prodList;
      }
  }

  // ShoppingCart와 ProductList를 합쳐서 렌더링처리하는 클래스
  class Shop{
    constructor(){
        this.render();
    }
    render(){
        const $app = document.getElementById('app');
        $app.appendChild(new ShoppingCart().render());
        $app.appendChild(new ProductList().render());
    }
  }
  
  // 렌더링 명령
new Shop();b 