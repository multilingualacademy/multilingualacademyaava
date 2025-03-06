// URL Recursos
const urlsOriginales = [
    "https://drive.google.com/file/d/1qajhu6EFoPJs6espxTchkLfWpJmJPodo/view?usp=drivesdkpag1.webp",
    "https://drive.google.com/file/d/13eXwybdOiWdIdg7-j3no08PuXAXuh8SV/view?usp=drivesdkpag2.webp",
    "https://drive.google.com/file/d/1LhxEtO3id46_FxiL8MzNvSUo1qI25OPE/view?usp=drivesdkpag4.webp",
    "https://drive.google.com/file/d/1m34Su-mkls68fOml_c3ZFhS4hB2eu-R8/view?usp=drivesdkpag5.webp",
    "https://drive.google.com/file/d/1QyV4CxolN0PxbJgcgDoxzKkRjS2fzQ05/view?usp=drivesdkpag6.webp",
    "https://drive.google.com/file/d/1Gcs1yQCwjpAxlT43zSnC9ZQYQvg8sCG3/view?usp=drivesdkpag7.webp",
    "https://drive.google.com/file/d/1u9KAKJY1C9Nwn_I132lxvrW5DSPGsWZt/view?usp=drivesdkpag8.webp",
    "https://drive.google.com/file/d/1UEyaO8t6ohuAiZnCRaMmzaBl1JxYk_Ch/view?usp=drivesdkpag9.webp",
    "https://drive.google.com/file/d/1FUbTRAYQO-PErUw7xSV4Bafq4VW7ntPm/view?usp=drivesdkPag10.webp",
    "https://drive.google.com/file/d/18IHGwjGGgCuSsDU96NBVhK9F0h2QGh3O/view?usp=drivesdkpag11.webp",
    "https://drive.google.com/file/d/1TksPxK5hIqMnq2MijGon3tA7dCEZROW0/view?usp=drivesdkpag12.webp",
    "https://drive.google.com/file/d/14Nie8dy0OnsNk18QCTWfc3AUvjXmKaKq/view?usp=drivesdkpag13.webp",
    "https://drive.google.com/file/d/1xAka67e8vZFrpxBtcPRE6_eoyex7lt5s/view?usp=drivesdkpag14.webp",
    "https://drive.google.com/file/d/1-2R0UbrrokVwZE3wZQFPyOko0Am_6jZw/view?usp=drivesdkpag15.webp",
    "https://drive.google.com/file/d/1VAS_GUbmb5RgoS3R3VqZKhAIpbMAD8v6/view?usp=drivesdkpag16.webp",
    "https://drive.google.com/file/d/116PD7Xo7saWCQWeA00BsFOBgza_9qAIN/view?usp=drivesdkpag17.webp",
    "https://drive.google.com/file/d/16QGFwDfAITyEcAp_bu-Hngl6dwuwi3EL/view?usp=drivesdkpag18.webp",
    "https://drive.google.com/file/d/1ANdVg2ps3VRLvRe0Uc9X9IkOJbN9VAqm/view?usp=drivesdkpag19.webp",
    "https://drive.google.com/file/d/1A2fUxotOkN2zj_Kdq7KR6V83LKJzXxKv/view?usp=drivesdkpag20.webp",
    "https://drive.google.com/file/d/1d2fCk21CdmF04Q0VWtWSVjep3lho0nxa/view?usp=drivesdkpag21.webp",
    "https://drive.google.com/file/d/1zpeZOFevCG6U_tIPIei4AFBUZ_-IdVmR/view?usp=drivesdkpag22.webp",
    "https://drive.google.com/file/d/16VJjvP9o3bqNM2aqX6EQj3q3wgQthKyA/view?usp=drivesdkpag23.webp",
    "https://drive.google.com/file/d/1-qBzC7BrZhKdQN6ggiRoazeSNrGwfisp/view?usp=drivesdkpag24.webp",
    "https://drive.google.com/file/d/1Xwqyl16uqur026ICJbDquMSswFQlI9YJ/view?usp=drivesdkpag25.webp",
    "https://drive.google.com/file/d/1YT6692SpMSDREpNoVDUPv2wEBrrqif73/view?usp=drivesdkpag26.webp",
    "https://drive.google.com/file/d/1-m_TTbKoGq6Bt8i2oWE5wuvKtOJuIhMs/view?usp=drivesdkpag27.webp",
    "https://drive.google.com/file/d/1OFmXwgt0sNkCGoVwrgr7tXj8uiSP-fzu/view?usp=drivesdkpag28.webp",
    "https://drive.google.com/file/d/17kzyodEzbXK9-D8PtUS1YRsUMrhLLKnu/view?usp=drivesdkpag29.webp",
    "https://drive.google.com/file/d/1fBdZmxdL7CsKyy1pMITdB7VgHve5hdOb/view?usp=drivesdkpag30.webp",
    "https://drive.google.com/file/d/1kNQaWAG9Xg0aXLVom1c-UXIxz8mh80Ob/view?usp=drivesdkpag31.webp",
    "https://drive.google.com/file/d/1CMUOdcZum4VE0rftCHCx_nq2jX8YssUW/view?usp=drivesdkpag32.webp",
    "https://drive.google.com/file/d/15uRjCFTjghI46TMiA2S5qAD0UtVRfGJ_/view?usp=drivesdkpag33.webp",
    "https://drive.google.com/file/d/1HphErL_3j9seKCaveYK3ChDt5dpgWr5f/view?usp=drivesdkpag34.webp",
    "https://drive.google.com/file/d/1-PA_M-Ha57xAtjqPO6GwtPPn6sIdjGLg/view?usp=drivesdkpag35.webp",
    "https://drive.google.com/file/d/1L0pLruizGjHKf6b4RDQ0-OHEWWPMO0tr/view?usp=drivesdkpag36.webp",
    "https://drive.google.com/file/d/11_xrXDs6AygyQ3QGns1G7lDncDW_wQkz/view?usp=drivesdkpag37.webp",
    "https://drive.google.com/file/d/1xOI6RzmJqTO2Hoftawpx-T1076p0X6H8/view?usp=drivesdkpag38.webp",
    "https://drive.google.com/file/d/16tQx0HkwYFtegPJznykVf-v6yTgbCxYx/view?usp=drivesdkpag39.webp",
    "https://drive.google.com/file/d/1Y07jRAJYwUNZ6_hIFhzidKgbjj5oYY1d/view?usp=drivesdkpag40.webp",
    "https://drive.google.com/file/d/1PdgB1RDOWqu1w4l-EVo6Ynb2AXXR6-xE/view?usp=drivesdkpag41.webp",
    "https://drive.google.com/file/d/1Mmqmg_7NECF6rjhMR5uzhqjiT8uvMz2J/view?usp=drivesdkpag42.webp",
    "https://drive.google.com/file/d/1ljAKZZvOM3rGCL4lcxuJfrR1JQqt6YbX/view?usp=drivesdkpag43.webp",
    "https://drive.google.com/file/d/1iV_9D3xWqbqRL6qygQJUgt2FZRxbmfWl/view?usp=drivesdkpag44.webp",
    "https://drive.google.com/file/d/10mKd2MAS9kAgRpciIkYwfnTrt8Z4s3iC/view?usp=drivesdkpag45.webp",
    "https://drive.google.com/file/d/1oACHW_a2_WFibaIyNuGB0ObRQtnTj2PS/view?usp=drivesdkpag46.webp",
    "https://drive.google.com/file/d/1d3VNxYJJRRQc5ZQwhweK3DoXmPS925Tx/view?usp=drivesdkpag47.webp",
    "https://drive.google.com/file/d/1Tt_j6nKLc0vVDNQ2Hq69XFIaAyErEo7K/view?usp=drivesdkpag48.webp",
    "https://drive.google.com/file/d/1RMgJyBkdOPFKO44-HAzNOhIBgZ8fQXt8/view?usp=drivesdkpag49.webp",
    "https://drive.google.com/file/d/1Vxeg5P9Ot1Nhk9A3gL-pkzu3ZNYBfuEL/view?usp=drivesdkpag50.webp",
    "https://drive.google.com/file/d/11KHZ8ERMh32IpsRCyaEDVYxBtn-NhBmf/view?usp=drivesdkpag51.webp",
    "https://drive.google.com/file/d/1FgbHmKrSdJyRseRz75F-eB4TUwc7GeJg/view?usp=drivesdkpag52.webp",
    "https://drive.google.com/file/d/1x_P3TnBmZIUo9KmPpFmpjhgUcDSYy9eX/view?usp=drivesdkpag53.webp",
    "https://drive.google.com/file/d/12_qImSCAX1XMBCMpsx_wCjiYWuGZIh0b/view?usp=drivesdkpag54.webp",
    "https://drive.google.com/file/d/1S7ONBsI31Sw6391ku6TjyWdo-Scv71RT/view?usp=drivesdkpag55.webp",
    "https://drive.google.com/file/d/1BUfH6y8_qgb3f6g-S_HlYHIGHHCTr5S1/view?usp=drivesdkpag56.webp",
    "https://drive.google.com/file/d/18ccMlXrUlL-ypJOUS9zl7QNlXM6txiiw/view?usp=drivesdkpag57.webp",
    "https://drive.google.com/file/d/12acEI_h4UWLfBTjRp0TqHyjZPfTMITuc/view?usp=drivesdkpag58.webp",
    "https://drive.google.com/file/d/1cv2MGuWh_k0zyjKLuf6ogrb0W9bFgDiJ/view?usp=drivesdkpag59.webp",
    "https://drive.google.com/file/d/14RjUsa2uhi1vCvB4cbHv2lw-r24HRFQc/view?usp=drivesdkpag60.webp",
    "https://drive.google.com/file/d/17lB1FjUu2FbccPcmpxD_YgUMEc3m2ALv/view?usp=drivesdkpag61.webp",
    "https://drive.google.com/file/d/1BYjeqMCp6C3XhmIUHYgEX1YOeOeBNGRl/view?usp=drivesdkpag62.webp",
    "https://drive.google.com/file/d/1hYD-fFd_wfemqVN5oh4QqN9HtVYAgBZ-/view?usp=drivesdkpag63.webp",
    "https://drive.google.com/file/d/10O-6ueXOZuE5_zedverNDe35uudmUoXW/view?usp=drivesdkpag64.webp",
    "https://drive.google.com/file/d/1phQJPDBQoQTI5RX6_ihZzsW_Vn9qaI5Y/view?usp=drivesdkpag65.webp",
    "https://drive.google.com/file/d/1XOlfjanE0likFWikSNX7JmiMDg2_ii5-/view?usp=drivesdkpag66.webp",
    "https://drive.google.com/file/d/1ZcrBbJ8PFP9dDT6CRpfF7VdU9__b_-sP/view?usp=drivesdkpag67.webp",
    "https://drive.google.com/file/d/1Sdcxk1rsdr6iks3bdqz68y_5XyBQCNLW/view?usp=drivesdkpag68.webp",
    "https://drive.google.com/file/d/12fK8F_6JQQKsa0drIqZ3j6nQMB3TSOVu/view?usp=drivesdkpag69.webp",
    "https://drive.google.com/file/d/18chnUObK7k4Y19-teE-c0X4mp4f3lc2u/view?usp=drivesdkpag70.webp",
    "https://drive.google.com/file/d/14Dxbk7fYCmYb7dcwlhOcSSB97DfJ5VAd/view?usp=drivesdkpag71.webp",
    "https://drive.google.com/file/d/1JUEjZ_zRw3iLK63sJQHCBO6Y4Hrp2j3y/view?usp=drivesdkpag72.webp",
    "https://drive.google.com/file/d/1WZoTQ6Gx2mw6dmCyPWz7qbuImofN2Ir-/view?usp=drivesdkpag73.webp",
    "https://drive.google.com/file/d/1FrhkiZSyYXJwuptNgSlr22IDiW7odPyi/view?usp=drivesdkpag74.webp",
    "https://drive.google.com/file/d/10dT8_DdH2hmKS_C0Im2SgHLo1yhLHmwO/view?usp=drivesdkpag75.webp",
    "https://drive.google.com/file/d/1R3IADokiDCCO7vgJU3eMclYgG8hNLHOm/view?usp=drivesdkpag76.webp",
    "https://drive.google.com/file/d/1IJIqUafsR3XR7Ux61A69baegiybK7uAs/view?usp=drivesdkpag77.webp",
    "https://drive.google.com/file/d/1Y1hQsN9wcEuYegdMPl4kXecKK_yndeGy/view?usp=drivesdkpag78.webp",
    "https://drive.google.com/file/d/1cdjlMvN_rLoTD__k89P3iZo9X4t4JbLV/view?usp=drivesdkpag79.webp",
    "https://drive.google.com/file/d/1i3rsPOlPvaZ-EN0Q0n3kvyN0XDCTMpoR/view?usp=drivesdkpag80.webp",
    "https://drive.google.com/file/d/1yfmpYgJ1hKAkF6MKF-q4Ho8vIKlGRmox/view?usp=drivesdkpag81.webp",
    "https://drive.google.com/file/d/1_MHDO8In2p3RFNlvZpfhbKPI_XX58nM_/view?usp=drivesdkpag82.webp",
    "https://drive.google.com/file/d/1tCvNpsdG_MB3ApSeQryBhK4_5xgHCNUi/view?usp=drivesdkpag83.webp",
    "https://drive.google.com/file/d/1RaCplkOvKrq6q-WHj2B_rRvd_z183QlC/view?usp=drivesdkpag84.webp",
    "https://drive.google.com/file/d/1yQ91SVLXahkyhXr99KpTMm3tJMUMrSlk/view?usp=drivesdkpag85.webp",
    "https://drive.google.com/file/d/1_akDJ8R4ZzCabolhuWa96-9Ge7QfK0Mu/view?usp=drivesdkpag86.webp",
    "https://drive.google.com/file/d/14eUwOfxpws4xO_PmvALKU04xzbdeL08b/view?usp=drivesdkpag87.webp",
    "https://drive.google.com/file/d/1Kx39SC_SREN3y6Xxv9gwHC68IGGwnJ2i/view?usp=drivesdkpag88.webp",
    "https://drive.google.com/file/d/1IM7KORmVyQseijcLswWdgBe_BWyjaYt-/view?usp=drivesdkpag89.webp",
    "https://drive.google.com/file/d/1gy_7lNO1yKomyZMpCNO-4OzJIGoEN5NF/view?usp=drivesdkpag90.webp",
    "https://drive.google.com/file/d/1-BYAXTu20Ex1rtWgoCR-M5s5A48U-5Jc/view?usp=drivesdkpag91.webp",
    "https://drive.google.com/file/d/1s4glXnH_6lFJqFp76G16NJcEInzwUm1Z/view?usp=drivesdkpag92.webp",
    "https://drive.google.com/file/d/1cQ9NKmP_6RKQeiEQOAUgPHpCVbBzhxou/view?usp=drivesdkpag93.webp",
    "https://drive.google.com/file/d/1ha2Z3OVqMjiGnsYtTilDXo7_zDjM24GK/view?usp=drivesdkpag94.webp",
    "https://drive.google.com/file/d/1PTrbjQOlGKzjHMMcXQf6HSXjGQR-Sujc/view?usp=drivesdkpag95.webp",
    "https://drive.google.com/file/d/1NC540hg_WCNTNaEsvnZdJfSghAJrfXO-/view?usp=drivesdkpag96.webp",
    "https://drive.google.com/file/d/1Jsl-O9NKq4jWnNkmU_CQ_QQP-9StHQY-/view?usp=drivesdkpag97.webp",
    "https://drive.google.com/file/d/1euPc9cI8vPiwLVOLE9dcecQUk3PCrhPm/view?usp=drivesdkpag98.webp",
    "https://drive.google.com/file/d/1Z4qCdFquQZcOnpcs83G6KBc0hs6TCw8y/view?usp=drivesdkpag99.webp",
    "https://drive.google.com/file/d/1ewnp5tPPDc-TlZ2HaBDHzWnxGQF5Z3ov/view?usp=drivesdkpag100.webp",
    "https://drive.google.com/file/d/1PlmOGcjghktASqDiqxSYZNhFDBjGYWki/view?usp=drivesdkpag101.webp",
    "https://drive.google.com/file/d/1HP32spdjDk66ot5xok6gbrrhu0ETEEFU/view?usp=drivesdkpag102.webp",
    "https://drive.google.com/file/d/1LqgPSHNfBAmwS0MOSg_HdjEsIL_D_VqO/view?usp=drivesdkpag103.webp",
    "https://drive.google.com/file/d/1uqq74iCMX0sjCyExtyz8EcEFCt_F9aYg/view?usp=drivesdkpag104.webp",
    "https://drive.google.com/file/d/12NcIkpHk7p1gwG0_wZy-w1fQzjpzUTc5/view?usp=drivesdkpag105.webp",
    "https://drive.google.com/file/d/1MgXeKa5fdBidHXsqdoe6RekmUD0B0__g/view?usp=drivesdkpag106.webp",
    "https://drive.google.com/file/d/1MC6oo27nGD1QBWLyGVaAs1yNkmuxK6c7/view?usp=drivesdkpag107.webp",
    "https://drive.google.com/file/d/1OsFKeua25M40lLirSqoVXAeaRBxBXGvz/view?usp=drivesdkpag108.webp",
    "https://drive.google.com/file/d/1PwkcYli2EHap8g6eVhGHAvugym_2XGfp/view?usp=drivesdkpag109.webp",
    "https://drive.google.com/file/d/17VWhCyGjUocRn0Licnpfg83-kjoIdJh7/view?usp=drivesdkpag110.webp",
    "https://drive.google.com/file/d/1TiOthV2G6rrocaJpCu2i0om-4HdMQByO/view?usp=drivesdkpag111.webp",
    "https://drive.google.com/file/d/1EHkc_b4_zP0IojEi9kmEGAMeB5u9kKcX/view?usp=drivesdkpag112.webp",
    "https://drive.google.com/file/d/1djycqHvKjEXLncir01jlTrGX1ZXIx51h/view?usp=drivesdkpag113.webp",
    "https://drive.google.com/file/d/1ueuuiHrajIxA7i-0YTMCoJ65mhiCQ8cN/view?usp=drivesdkpag114.webp",
    "https://drive.google.com/file/d/1ZOlPYguT8tnpkwmgfMNGY3gGm-f2wCeY/view?usp=drivesdkpag115.webp",
    "https://drive.google.com/file/d/1DcKPzHk2GMPg0TLwg6VzsCdBBpbQCd-n/view?usp=drivesdkpag116.webp",
    "https://drive.google.com/file/d/1l-kwmW_7P65LaQ3bIsBEKkGne0U0g50s/view?usp=drivesdkpag117.webp",
    "https://drive.google.com/file/d/1fqYHUPRlqRcdRbW0m7gTY8u3r4tIdmCc/view?usp=drivesdkpag118.webp",
    "https://drive.google.com/file/d/1Bo0jd56zi0F2Jt_BFPSWNWwVDuIDxxfQ/view?usp=drivesdkpag119.webp",
    "https://drive.google.com/file/d/1epSF15vVDzaK60QLU9uLHjIRl-Po6nE4/view?usp=drivesdkpag120.webp",
    "https://drive.google.com/file/d/1Mq3khJ37l4mZR8jTtkg_PgCKOb_9_s2q/view?usp=drivesdkpag121.webp",
    "https://drive.google.com/file/d/1okH9yjRC24fEFAXb0zj2DhuWECl_tASD/view?usp=drivesdkpag122.webp",
    "https://drive.google.com/file/d/1jfoNPSt5IfzudxkCeyqow_v6jQvcLkZh/view?usp=drivesdkpag123.webp",
    "https://drive.google.com/file/d/1jsyQfcnAkarpR52rU3PniiDcjRNUPYcJ/view?usp=drivesdkpag124.webp",
    "https://drive.google.com/file/d/1pGWnTY5zxKYEN8GDdKBgOGPL3gSxD0si/view?usp=drivesdkpag125.webp",
    "https://drive.google.com/file/d/1GlwNUrefVv7J6O26X0rOisFBWbe2Yyyn/view?usp=drivesdkpag126.webp",
    "https://drive.google.com/file/d/175KafztJ1M8xhN-OrUlAyWlxWJiL3kX8/view?usp=drivesdkpag127.webp",
    "https://drive.google.com/file/d/1oF-e35ECBv467IonrPqLrj4NM0j6lNdV/view?usp=drivesdkpag128.webp",
    "https://drive.google.com/file/d/1cwz5n8LZbMrfUCe_9-8_87jsDXXTuIs_/view?usp=drivesdkpag129.webp",
    "https://drive.google.com/file/d/1750DMMPg5aYx9GCqRcdoxKGdR5sGPBXk/view?usp=drivesdkpag130.webp",
    "https://drive.google.com/file/d/1gfpxrm0y0tthU_qnFyKdlCgttn5NXXkm/view?usp=drivesdkpag131.webp",
    "https://drive.google.com/file/d/1KxsNeQW_JxoK--XXAQ3a5GPnSTHapsvM/view?usp=drivesdkpag132.webp",
    "https://drive.google.com/file/d/1DWkqOCx9iDYiithu6z-kWxy1Z3iG2gcB/view?usp=drivesdkpag133.webp",
    "https://drive.google.com/file/d/1fRzHGWCS0rOV0lJ1q21KTmIoK1ZtotrP/view?usp=drivesdkpag134.webp",
    "https://drive.google.com/file/d/1AI8pxSdKFCagb2fDcBWk0Pnv9ElWKOOu/view?usp=drivesdkpag135.webp",
    "https://drive.google.com/file/d/1Dmfy9ombg4gymtpHpgrlqze5YbquMUEW/view?usp=drivesdkpag136.webp",
    "https://drive.google.com/file/d/1r8WZgTQAfGiVGqe0LH9K2zGtFTH8wKpY/view?usp=drivesdkpag137.webp",
    "https://drive.google.com/file/d/1RuqtuwJouvkoKkZpBSxaWYck5RuC3FK-/view?usp=drivesdkpag138.webp",
    "https://drive.google.com/file/d/1TE-RCqmVjXvU6128U-Rcf66cJzqsYZ5D/view?usp=drivesdkpag139.webp",
    "https://drive.google.com/file/d/1LnlMePKo_7gbwFXzQswGOUUP0my361wo/view?usp=drivesdkpag140.webp",
    "https://drive.google.com/file/d/1ip24-KEMSvW5v4UHIh8QjkWGHr5Ync4w/view?usp=drivesdkpag141.webp",
    "https://drive.google.com/file/d/1rP5A9SDYzqekCHBQZCoS5xMBSevetvDn/view?usp=drivesdkpag142.webp",
    "https://drive.google.com/file/d/10bmzY1Fbx5hGCY_To9A2Z97rZWcL1ukt/view?usp=drivesdkpag143.webp",
    "https://drive.google.com/file/d/1cEJMNlZXrgthXMpbtZ-GFP_vMHEAiojo/view?usp=drivesdkpag144.webp",
    "https://drive.google.com/file/d/1-EF5yIQSLq2FriVfgY5FEPPRblmM_HLB/view?usp=drivesdkpag145.webp",
    "https://drive.google.com/file/d/1K4Bb8MQDJ_3s3mFskJmYVFKVlIjcqQ_2/view?usp=drivesdkpag146.webp",
    "https://drive.google.com/file/d/1RSNZ8FQlpPCgI-1lYF7iB3eVjCawJtZx/view?usp=drivesdkpag147.webp",
    "https://drive.google.com/file/d/1_f1MwmoJQMdG3OE2MMpbdUy8cS7Bjkhy/view?usp=drivesdkpag148.webp",
    "https://drive.google.com/file/d/1vVzclZjnBk6VkU0RG3nlsU3N4iRVccSY/view?usp=drivesdkpag149.webp",
    "https://drive.google.com/file/d/1Pw4DHgnMf5AFuacZ9G1D_QGzTm8jms8Q/view?usp=drivesdkpag150.webp",
    "https://drive.google.com/file/d/18Y5SVGVgJT5goLsPuv7ft_XUuxZMQqoE/view?usp=drivesdkpag151.webp",
    "https://drive.google.com/file/d/1gYP7fN0qkSE8ranq_6sBBhhAXdM3JBjH/view?usp=drivesdkpag152.webp",
    "https://drive.google.com/file/d/1Mbv31A0_5RMNzgQM3-IyfaC0kh-FOlOP/view?usp=drivesdkpag153.webp",
    "https://drive.google.com/file/d/1DxlY07cVDPFqPEGNj3B-w7VxnkDqcqyT/view?usp=drivesdkpag154.webp",
    "https://drive.google.com/file/d/1RpZN2ETA49oI4RYkI_5U9wkZMIXUMAqI/view?usp=drivesdkpag155.webp",
    "https://drive.google.com/file/d/1qFxNqBZT2w_ej1BgmXHCVaB71nI9olAg/view?usp=drivesdkpag156.webp",
    "https://drive.google.com/file/d/1a8nunQRJL-lgj0wPqefft6a-ACVgkF5p/view?usp=drivesdkpag157.webp",
    "https://drive.google.com/file/d/1reBd1rRKzrODYkMuM3PyO7Zzf06ju4RM/view?usp=drivesdkpag158.webp",
    "https://drive.google.com/file/d/1i1FaZ_-g41-krmEFlQpthNv9KSqCu692/view?usp=drivesdkpag159.webp",
    "https://drive.google.com/file/d/1W3fYAJA_xGcD2sK5pKc19pdacRIgFx6h/view?usp=drivesdkpag160.webp",
    "https://drive.google.com/file/d/1AdyO0IQmH33cInUm5z0i5ZHVBo5ibj5T/view?usp=drivesdkpag161.webp",
    "https://drive.google.com/file/d/1TXbNEE4KPn9hc6q_m_ENayHvKib7tGMG/view?usp=drivesdkpag162.webp",
    "https://drive.google.com/file/d/19hLzKwhhDwrVZrfkycxyWVq-Cmkt7h31/view?usp=drivesdkpag163.webp",
    "https://drive.google.com/file/d/1yZtfxi3MdnTMfkPUOk_J6-YqeZhN4sQ6/view?usp=drivesdkpag164.webp",
    "https://drive.google.com/file/d/1pLnzmroqDATJG9Wdz8Txgn3NehXFdw4-/view?usp=drivesdkpag165.webp",
    "https://drive.google.com/file/d/1XB5Uu3XtpMA2nu_N727C9lWa5x9wD0cB/view?usp=drivesdkpag166.webp",
    "https://drive.google.com/file/d/1U7oN_EtRVXxnBZdFvBfkqpcPTVe90OLO/view?usp=drivesdkpag167.webp",
    "https://drive.google.com/file/d/1H62QyBV_tmUxNcQI33svJvBcGHlE95_U/view?usp=drivesdkpag168.webp",
    "https://drive.google.com/file/d/1KFyfDgbsu-C1Fab61TkC7lhhBgCReq12/view?usp=drivesdkpag169.webp",
    "https://drive.google.com/file/d/1gLSg59wO0RN6fVsVK5o-KQNe1snCeRsS/view?usp=drivesdkpag170.webp",
    "https://drive.google.com/file/d/1RMUTkDpsY3miNk6-X4LPcjrK2VnKnqW1/view?usp=drivesdkpag171.webp",
    "https://drive.google.com/file/d/1r98AWAERUJgNat_4s85_X7pXfHb6wlY5/view?usp=drivesdkpag172.webp",
    "https://drive.google.com/file/d/14anhMSH82rZGCtmYOE32MHaICaBbB9fd/view?usp=drivesdkpag173.webp",
    "https://drive.google.com/file/d/1OVQSPBbOsT4SjPL0t0ig7Bto3LtTLTYG/view?usp=drivesdkpag174.webp",
    "https://drive.google.com/file/d/1-bBLYZYdn4MUp3nl3ia_t4boHvHQGSBJ/view?usp=drivesdkpag175.webp",
    "https://drive.google.com/file/d/1ShV8R77_1EQnE64j5LMpFrxSiCYWX00H/view?usp=drivesdkpag176.webp",
    "https://drive.google.com/file/d/1ihbqxy6GNitRS4jHngpTeamfIYXIdc9O/view?usp=drivesdkpag177.webp",
    "https://drive.google.com/file/d/1fWq6IDUyMyVbSqpYTDr6EvDCx4jzeYlc/view?usp=drivesdkpag178.webp",
    "https://drive.google.com/file/d/1nLQqtS9A0WxqWmolRLe7G5romvyqZhkd/view?usp=drivesdkpag179.webp",
    "https://drive.google.com/file/d/1KC_FFDtmVYdtVQJV_X0QscEB9bpb2WB3/view?usp=drivesdkpag180.webp",
    "https://drive.google.com/file/d/1jnPDI0u0QY2oWYyF25u0BRdGOwy6fcjJ/view?usp=drivesdkpag181.webp",
    "https://drive.google.com/file/d/1C1mt7o-wrDBBwWZBmQ4ZuaDmdMoNIjL-/view?usp=drivesdkpag182.webp",
    "https://drive.google.com/file/d/1R0hCqIc1IdOe1aJka1c8IK2rq0F2GRdQ/view?usp=drivesdkpag183.webp",
    "https://drive.google.com/file/d/1QD6hP4C0FmJidkEwznVUJSsFzCwD8Qgw/view?usp=drivesdkpag184.webp",
    "https://drive.google.com/file/d/1F0XbChazRMeS3-Zg1UhIwi4GRLkFMOm9/view?usp=drivesdkpag185.webp",
    "https://drive.google.com/file/d/1p-W87OjfXlc8yY7q75toiW8u9AVTW8hL/view?usp=drivesdkpag186.webp",
    "https://drive.google.com/file/d/1q_iHC5EUoA9DfjhfvO1ts9OH-4VGJDYX/view?usp=drivesdkpag187.webp",
    "https://drive.google.com/file/d/1X-wW0RY78Z8_NP1W19HqwqqlTK27scdM/view?usp=drivesdkpag188.webp",
    "https://drive.google.com/file/d/1H-N7kZGgY3kU_MwQ3fZ78AdAtMdz98uL/view?usp=drivesdkpag189.webp",
    "https://drive.google.com/file/d/16IGJk2i4ymUTwtPJXAZ5r4oaXSfnjm_i/view?usp=drivesdkpag190.webp",
    "https://drive.google.com/file/d/1y3WQz1B1KYGGtCR0Hlt3wzaYZHZWrqDt/view?usp=drivesdkpag191.webp",
    "https://drive.google.com/file/d/1fXaDY1pjt7cbRRKRgvifJRjmyQkEEONG/view?usp=drivesdkpag192.webp",
    "https://drive.google.com/file/d/1uTGy65nasFm74A4nCYXvT-bUV_Pv71uI/view?usp=drivesdkpag193.webp",
    "https://drive.google.com/file/d/1RWfX9OqNfVzDYdNEOL1RFWuu5E31fJUU/view?usp=drivesdkpag194.webp",
    "https://drive.google.com/file/d/1Tv2hwaVX_MhxuC8ASh7IGqUQrnQ3lxUq/view?usp=drivesdkpag195.webp",


    // "https://drive.google.com/file/d/19UIN7clU4Y8inCPIfutgJb3_EOdz2s9H/view?usp=drivesdkPag_1.png",
    // "https://drive.google.com/file/d/1SmP3S3yUgk9Cef-0qQfbNe3EPr2aKNk_/view?usp=drivesdkPag_2.png",
    // "https://drive.google.com/file/d/1B8rugaidgF4T8pFKG82atjPfzW3NsIXA/view?usp=drivesdkPag_3.png",
    // "https://drive.google.com/file/d/1bhbLut-5iwnYt2wb_WFjUScMiBpM0mLk/view?usp=drivesdkPag_4.png",
    // "https://drive.google.com/file/d/1X1qiephJ9AOuX1DM8zfwbLF8WFdz29l7/view?usp=drivesdkPag_5.png",
    // "https://drive.google.com/file/d/1KL_KcApAixRZ0KuYx_xNglMU7VDtA2OK/view?usp=drivesdkPag_6.png",
    // "https://drive.google.com/file/d/13YPYVuKw8Gu-EY5MML_B_F8oBFPIcLVX/view?usp=drivesdkPag_7.png",
    // "https://drive.google.com/file/d/1WmbWau8IqeOH60rbi5L8d-BCvXmkhj9t/view?usp=drivesdkPag_8.png",
    // "https://drive.google.com/file/d/1KvPPdftnf8sqkPfx4Z4dO24O02FLupRm/view?usp=drivesdkPag_9.png",
    // "https://drive.google.com/file/d/1x5CUnt3PbGWUeK93l3mqFOM6e43iKMFp/view?usp=drivesdkPag_10.png",
    // "https://drive.google.com/file/d/1uXM6zlkjirYbYXIkIJOQdEKclUW6Yl4Y/view?usp=drivesdkPag_11.png",
    // "https://drive.google.com/file/d/1iOIehO3L7kRG3UjCx5vmGweJIjsroajK/view?usp=drivesdkPag_12.png",
    // "https://drive.google.com/file/d/1oVK2hyzBDlH5AdoYxqYSFlwcnHqPqXsz/view?usp=drivesdkPag_13.png",
    // "https://drive.google.com/file/d/1u07lIR8nCNlG81ymKnm2vpAWR5NwmVgA/view?usp=drivesdkPag_14.png",
    // "https://drive.google.com/file/d/1SrNONkF5rXRn-pOL3v51TNdEdtiFQiKU/view?usp=drivesdkPag_15.png",
    // "https://drive.google.com/file/d/1eMt95xHCmM2NgzWJ5nL-qYigrp0oDftT/view?usp=drivesdkPag_16.png",
    // "https://drive.google.com/file/d/16ykvn-BLKGNTdnzjFzaAdk3C6yiKX5pl/view?usp=drivesdkPag_17.png",
    // "https://drive.google.com/file/d/10M2tjgCYBk6Zggp5KCIs9n-5tinR0tCD/view?usp=drivesdkPag_18.png",
    // "https://drive.google.com/file/d/10Dsz-rXedlUPCFW6up0Wk3CzCoHxNSh1/view?usp=drivesdkPag_19.png",
    // "https://drive.google.com/file/d/1zmteHFrhC0PC1oVwZ03gMq3gkWozhPEI/view?usp=drivesdkPag_20.png",
    // "https://drive.google.com/file/d/1MJjs_t5EDp9_BMCsW1NiuFsJQNzcSIMo/view?usp=drivesdkPag_21.png",
    // "https://drive.google.com/file/d/1UEwaCiXdtSqRLs4bN5jdbqY2ctkETu_n/view?usp=drivesdkPag_22.png",
    // "https://drive.google.com/file/d/1GQCNBOpJlhHl2-Ds7sDEOTXpcQHhKVmU/view?usp=drivesdkPag_23.png",
    // "https://drive.google.com/file/d/1gq1DJNdricME7yNwGoX19eQh0WJx4PtH/view?usp=drivesdkPag_24.png",
    // "https://drive.google.com/file/d/12-lfUBmb8aPOkRnY-CVtCmqDwP_bTmeV/view?usp=drivesdkPag_25.png",
    // "https://drive.google.com/file/d/1dtb8Fx4KEEHw2aBdyF83UpFEeSx-tdb6/view?usp=drivesdkPag_26.png",
    // "https://drive.google.com/file/d/1hx2MGSV_vZ4GIfZH4GHhnRvwc16HA16T/view?usp=drivesdkPag_27.png",
    // "https://drive.google.com/file/d/17T5kXJS90JhwUGwEbUBG8Os0wxg1U5Rf/view?usp=drivesdkPag_28.png",
    // "https://drive.google.com/file/d/1A7s_ng15jTdF98HLcgjqNq7dEL2hLL3x/view?usp=drivesdkPag_30.png",
    // "https://drive.google.com/file/d/1bvEHPDCL2i4dRQ-m8-oHwgbgwyB8YFuK/view?usp=drivesdkPag_31.png",
    // "https://drive.google.com/file/d/1jwZtxpEDJQiW8uqzSa4GXMVS2Bgk5S_m/view?usp=drivesdkPag_32.png",
    // "https://drive.google.com/file/d/1kU29kbTM8pCT9Ki4ORfoiQDH1q3PVHDI/view?usp=drivesdkPag_33.png",
    // "https://drive.google.com/file/d/1qopacquh5Mri-A5vtV8vfBc5qb8hPT_h/view?usp=drivesdkPag_34.png",
    // "https://drive.google.com/file/d/1Q_nlORkvrmJCpE04FKnj9PdCzMx5ICmz/view?usp=drivesdkPag_35.png",
    // "https://drive.google.com/file/d/1v5uj3m_C9pvYwsm-57dG6qdavgQrodqz/view?usp=drivesdkPag_36.png",
    // "https://drive.google.com/file/d/1WDny0cQ_plSHGWxpcukiXRyoS65JAub2/view?usp=drivesdkPag_37.png",
    // "https://drive.google.com/file/d/1A80fAbsySFEu77CURE5UL7LPaoM2-h1H/view?usp=drivesdkPag_38.png",
    // "https://drive.google.com/file/d/1e9K60ALj2-K9MnP7Td0eF6_FwKFDyJu6/view?usp=drivesdkPag_39.png",
    // "https://drive.google.com/file/d/1EnLZ22NBDmUwteblGGM4r2HtT3LEIsIA/view?usp=drivesdkPag_40.png",
    // "https://drive.google.com/file/d/11YIHiQvVlw992RRixm5ZYUcBSXpD_e2q/view?usp=drivesdkPag_41.png",
    // "https://drive.google.com/file/d/1uD_fFTHwdC6YKQr5q5HRZWfrsYFrF4mK/view?usp=drivesdkPag_42.png",
    // "https://drive.google.com/file/d/1SXjCDcJ_Oy9spEbvthAyaFI5b1H6bzya/view?usp=drivesdkPag_43.png",
    // "https://drive.google.com/file/d/1qSMu1FlxvQzK-Kz7CJ8ksujJvc_hCo3I/view?usp=drivesdkPag_44.png",
    // "https://drive.google.com/file/d/1B-pHzXIyGr5r_wOjuWpCmdv2G8ja0wNg/view?usp=drivesdkPag_45.png",
    // "https://drive.google.com/file/d/1dISc6wPSe5mGpq6HAehNCt8LwvN4y61S/view?usp=drivesdkPag_46.png",
    // "https://drive.google.com/file/d/154_M2NI_z1K-TkfGTr35HnRdvhIvDZmc/view?usp=drivesdkPag_47.png",
    // "https://drive.google.com/file/d/1pGyQuIdHsnhulKzs0B5cgF2OPZqjydyO/view?usp=drivesdkPag_48.png",
    // "https://drive.google.com/file/d/125btmwEg-2YqhdtH9c9Lvi9kls_Hn3Gs/view?usp=drivesdkPag_49.png",
    // "https://drive.google.com/file/d/1QdOmlsd7N2o1eM7i-9xPPhHV0zJa-Vna/view?usp=drivesdkPag_50.png",
    // "https://drive.google.com/file/d/1TQS8b_m0lMh1QpOBhMADM-HKErM1X-Hf/view?usp=drivesdkPag_51.png",
    // "https://drive.google.com/file/d/1jdX6VMuofOKy-aHKoZeLwuzxNU9x9jwU/view?usp=drivesdkPag_52.png",
    // "https://drive.google.com/file/d/1tdWjNJzKfsaafKZFAaJaEBGfqMwv2B3Z/view?usp=drivesdkPag_53.png",
    // "https://drive.google.com/file/d/1jQcZEpAemNmDJ6580I61naPRtjtePEkl/view?usp=drivesdkPag_54.png",
    // "https://drive.google.com/file/d/1uk4TH4iF-HoEqWoWWDSR6pK4zATLCTRY/view?usp=drivesdkPag_55.png",
    // "https://drive.google.com/file/d/1IfIPDuFnjWp22ZUhdXYY0vllsTYriB5n/view?usp=drivesdkPag_56.png",
    // "https://drive.google.com/file/d/1CeHuaUvg67ChtKMWZHsEaZaKDju-FWZ9/view?usp=drivesdkPag_57.png",
    // "https://drive.google.com/file/d/1K-8EG1ZLoh359u1XjdefwL-9MCXWZl_f/view?usp=drivesdkPag_58.png",
    // "https://drive.google.com/file/d/1r7OxqMnP-Z2Au2h8qZN-rqSGfquOkhXA/view?usp=drivesdkPag_59.png",
    // "https://drive.google.com/file/d/1tle9105B_opO8kGNQfdU0bsM1RYtqttm/view?usp=drivesdkPag_60.png",
    // "https://drive.google.com/file/d/1u8P379CfDzT1R_JbTKfBy4e-yrKSlO94/view?usp=drivesdkPag_61.png",
    // "https://drive.google.com/file/d/1iNbv3lGQCV4Q8eW6_c1iB4ZE6oRdvYUb/view?usp=drivesdkPag_62.png",
    // "https://drive.google.com/file/d/13lFy9gJSsPUUW5QIhnGn0lpszLe64phj/view?usp=drivesdkPag_63.png",
    // "https://drive.google.com/file/d/1nWolM8H_MiUoRuxUaZ11kjOFka7XzTFr/view?usp=drivesdkPag_64.png",
    // "https://drive.google.com/file/d/1ivFgQUHPzbRYcCf-uYxu2f0PaUvbtgbe/view?usp=drivesdkPag_65.png",
    // "https://drive.google.com/file/d/1V202jSIEDJud9IXKMmWCrCieeq_XNDBB/view?usp=drivesdkPag_66.png",
    // "https://drive.google.com/file/d/1-90c21ONIOMdzG51h--ctsi7ZJ0VnmWa/view?usp=drivesdkPag_67.png",
    // "https://drive.google.com/file/d/1V2X7wfCdPLf5pqf2hUdfFwqPuFcYYJcT/view?usp=drivesdkPag_68.png",
    // "https://drive.google.com/file/d/1dN3lD0yVygaEaNH5uHy0SMSP4FESM3xc/view?usp=drivesdkPag_69.png",
    // "https://drive.google.com/file/d/1-zuZm5GPlwru-zOEMMlg-OfudypD3zfb/view?usp=drivesdkPag_70.png",
    // "https://drive.google.com/file/d/1dI-BjGmovXZoEb2j-qAmfhfuIG8R0jjk/view?usp=drivesdkPag_71.png",
    // "https://drive.google.com/file/d/1hdabrCJmtEaEr_gyw7vDjOpd9gA7OvD2/view?usp=drivesdkPag_72.png",
    // "https://drive.google.com/file/d/1gauL2dZG2PrXRofYqYQ30y_nZCmTR45I/view?usp=drivesdkPag_73.png",
    // "https://drive.google.com/file/d/1RbAOhNZPOjNDnBd7qEWKiqpA8LT87_W9/view?usp=drivesdkPag_74.png",
    // "https://drive.google.com/file/d/1joacGewbljfftgIoU0NMLC59IU5qchD4/view?usp=drivesdkPag_75.png",
    // "https://drive.google.com/file/d/1bQRVWTRQ56a5hcByrv1T9W0QjBvLVV9X/view?usp=drivesdkPag_76.png",
    // "https://drive.google.com/file/d/1ArEfGeGElM-yt_ivH10iOrGn_5ndp4M4/view?usp=drivesdkPag_77.png",
    // "https://drive.google.com/file/d/1XiDHSbGDgJcwDGA8liPGcqU0lIYC0Qmv/view?usp=drivesdkPag_78.png",
    // "https://drive.google.com/file/d/1DJnM9tJ2WcWjop7EYe1ZWfIbDOMTXe8q/view?usp=drivesdkPag_79.png",
    // "https://drive.google.com/file/d/1S3yRLXaCzzGyUNoIi0MW1FS8D-bhQWxZ/view?usp=drivesdkPag_80.png",
    // "https://drive.google.com/file/d/1940RnYhpHR9lcbblujojjfCdpNanXqgx/view?usp=drivesdkPag_81.png",
    // "https://drive.google.com/file/d/1eO7ie1jSoLXf-Gj23g8d3VtmxNp3K12W/view?usp=drivesdkPag_82.png",
    // "https://drive.google.com/file/d/162GTRTTIPLD_aIcAHUSk3ESa7tx64a_i/view?usp=drivesdkPag_83.png",
    // "https://drive.google.com/file/d/1JlOELOnFlTb9CFsO_53fpDVYxd_qn5jS/view?usp=drivesdkPag_84.png",
    // "https://drive.google.com/file/d/15l8Fjx4-jduv4Rq1nwfNJ7HyD5g8v9fM/view?usp=drivesdkPag_85.png",
    // "https://drive.google.com/file/d/108DzMynj17QL9UHHJP9CYSlj3Adj-2fm/view?usp=drivesdkPag_86.png",
    // "https://drive.google.com/file/d/1yWdh-TfC_ZYCQjvAiDQH1ZapRBN5GtSN/view?usp=drivesdkPag_87.png",
    // "https://drive.google.com/file/d/1N7CKM4Q9ZDg2kNKWDS20kR73eN9XFoQu/view?usp=drivesdkPag_88.png",
    // "https://drive.google.com/file/d/1jbFoQ1lU8dyxBkSaHt_EnlZugU_bpQTp/view?usp=drivesdkPag_89.png",
    // "https://drive.google.com/file/d/1TtHrfZYoiec5g9J2JBkCy_tvyCViEJzd/view?usp=drivesdkPag_90.png",
    // "https://drive.google.com/file/d/1ICBtniV-BWcPYO2autdmLQbjS-ecw5ed/view?usp=drivesdkPag_91.png",
    // "https://drive.google.com/file/d/1vu27ifSNDl6U_n6NTvSBz3BydQinlFjh/view?usp=drivesdkPag_92.png",
    // "https://drive.google.com/file/d/1rXXnuwklIslZgKvijIR7ddL0e474cAq1/view?usp=drivesdkPag_93.png",
    // "https://drive.google.com/file/d/1ifKNJaZ5Ym9zVckBXIXAi9zQtLMHM7oM/view?usp=drivesdkPag_94.png",
    // "https://drive.google.com/file/d/1oyPOKhKoSpogOe5UGaSkQqJWyRNM60DO/view?usp=drivesdkPag_95.png",
    // "https://drive.google.com/file/d/1lkDPPhHAbEZ5vk_ZJne1XuVF6BGsGsfm/view?usp=drivesdkPag_96.png",
    // "https://drive.google.com/file/d/1sDg4q7UPykHMUOnc30sAAzg3RWehRRQv/view?usp=drivesdkPag_97.png",
    // "https://drive.google.com/file/d/1QPeSvxRqfZPHOrNI061QnAGIVuHTRvNX/view?usp=drivesdkPag_98.png",
    // "https://drive.google.com/file/d/1j-bDiH86Mls0FrtbLT4GI8I6QesPk_ua/view?usp=drivesdkPag_99.png",
    // "https://drive.google.com/file/d/12VziXwDAbqYBe4Q2xGZplFWsj1WdxnzE/view?usp=drivesdkPag_100.png",
    // "https://drive.google.com/file/d/1AA447UID_mCozRZFL6LWbBuMEDXiPiiB/view?usp=drivesdkPag_101.png",
    // "https://drive.google.com/file/d/1OlCA1F8TpSROprHRB7DzrALunMbS3PZM/view?usp=drivesdkPag_102.png",
    // "https://drive.google.com/file/d/1e_FthrRXou2vYCYRD4MVNd86DmGAY9BN/view?usp=drivesdkPag_103.png",
    // "https://drive.google.com/file/d/1NCJxOQg73rb0ZlUwh4f5yc7GR-zQ0o-5/view?usp=drivesdkPag_104.png",
    // "https://drive.google.com/file/d/1tO2ajtnaKOQoeSzWlGkyasIa90f4yZhk/view?usp=drivesdkPag_105.png",
    // "https://drive.google.com/file/d/1tpYQ8dyKMJhzpfyfTTAnbUzZfUhtx058/view?usp=drivesdkPag_106.png",
    // "https://drive.google.com/file/d/1kXdXYSPG40EADsJuAY6f_y0xWG5DAJPS/view?usp=drivesdkPag_107.png",
    // "https://drive.google.com/file/d/1xN9nqm3kOl_7-vYOKJbOB9E_VZxm2lAy/view?usp=drivesdkPag_108.png",
    // "https://drive.google.com/file/d/1M20KUAgNkulhG2Z9heMOgi5h4ld3WYvo/view?usp=drivesdkPag_109.png",
    // "https://drive.google.com/file/d/1Isl3RL6Be9JCZK-qJRj4GevQUPgtsJ00/view?usp=drivesdkPag_110.png",
    // "https://drive.google.com/file/d/11KNTLmItsX_zelqw0cwqJX2GMo6vgKeC/view?usp=drivesdkPag_111.png",
    // "https://drive.google.com/file/d/1b3PKnasQXvYiQHnQF1Yc1MngC6mg4zsi/view?usp=drivesdkPag_112.png",
    // "https://drive.google.com/file/d/1D5_8TH7ycOIgTDvzYCr1-A3_KyPUR3oP/view?usp=drivesdkPag_113.png",
    // "https://drive.google.com/file/d/1p7QB5plHVGWwIw4564v4627wkoxZ_Mlu/view?usp=drivesdkPag_114.png",
    // "https://drive.google.com/file/d/1doy3incBhjk0c3ReDnZKpR4vHjmHsRs2/view?usp=drivesdkPag_115.png",
    // "https://drive.google.com/file/d/1HtE6gEBoCJzrISYy8vZi4WTzL0hi_D4V/view?usp=drivesdkPag_116.png",
    // "https://drive.google.com/file/d/12SfwUrCzW2WpKNmPOoXTJAD9YnwE0Cw0/view?usp=drivesdkPag_117.png",
    // "https://drive.google.com/file/d/1yLBFxiXirH9HRDQ52XrYfyBQ4Vl-vLgt/view?usp=drivesdkPag_118.png",
    // "https://drive.google.com/file/d/1nF3kz85APGYY8P7HRh6uQ7_RNK8f9Pz_/view?usp=drivesdkPag_119.png",
    // "https://drive.google.com/file/d/1qwxey32U61Q7LyJ_n5PVoOoVoZtO_iMx/view?usp=drivesdkPag_120.png",
    // "https://drive.google.com/file/d/183S9fqd66ugHAWVF23p_HPB10PfwehjI/view?usp=drivesdkPag_121.png",
    // "https://drive.google.com/file/d/1oSMgR_u3XxLE9eS_p46aD9BppfTSWDFb/view?usp=drivesdkPag_122.png",
    // "https://drive.google.com/file/d/1JHDdxmxcJ0qF7RJ7yUkEV1rrRVRSt-E1/view?usp=drivesdkPag_123.png",
    // "https://drive.google.com/file/d/1RVrvJ1eDQi0MauGsKMLUDahu_lsn8gj1/view?usp=drivesdkPag_124.png",
    // "https://drive.google.com/file/d/1TlGXpGPiWK4TyCbai9lOoxn50UHh4lnv/view?usp=drivesdkPag_125.png",
    // "https://drive.google.com/file/d/1pL2cZNatW7Pc7S9VXEWRmOxR_jwLxPcg/view?usp=drivesdkPag_126.png",
    // "https://drive.google.com/file/d/19gP08hiiudjpPnIpLn_wY8OsngzY9R01/view?usp=drivesdkPag_127.png",
    // "https://drive.google.com/file/d/1wSsSuJHsnVcUazabAr-SfVdwTbCMT4k1/view?usp=drivesdkPag_128.png",
    // "https://drive.google.com/file/d/19zujq4GJ0FS14sEsRlCET0YxHDgCc4hN/view?usp=drivesdkPag_129.png",
    // "https://drive.google.com/file/d/1D14Ia6EazmxPlVlGfWbxIZ5WE4EkXMJ7/view?usp=drivesdkPag_130.png",
    // "https://drive.google.com/file/d/1dARGGoMJStOiMLQqUlWSe4mbDHs7zbz9/view?usp=drivesdkPag_131.png",
    // "https://drive.google.com/file/d/1_83xhDOdTCJ7UIzUX-a5RFRALIuZb0Zi/view?usp=drivesdkPag_132.png",
    // "https://drive.google.com/file/d/1FrpqiTZfn2pXcaoStJSep5JlEFZzClpi/view?usp=drivesdkPag_133.png",
    // "https://drive.google.com/file/d/1qWW9P1gcY7koliQNAKdl05hSjWykp3UZ/view?usp=drivesdkPag_134.png",
    // "https://drive.google.com/file/d/1KztznA9Jc6_2iVo5z7l5hBbJLPXajRio/view?usp=drivesdkPag_135.png",
    // "https://drive.google.com/file/d/1A0Y1hqo9tCoJaTFv1ZtsQYUKv1AhIb_I/view?usp=drivesdkPag_136.png",
    // "https://drive.google.com/file/d/1r9NWO1GbAbgyuNhZZoBkRZZnBy7uOqUu/view?usp=drivesdkPag_137.png",
    // "https://drive.google.com/file/d/14AXExMfJ3PNQSGoPtSXtm_gWfjmrXi_k/view?usp=drivesdkPag_138.png",
    // "https://drive.google.com/file/d/1YeAtQxcFnVMM0u30FXCIefWp07hKuYWM/view?usp=drivesdkPag_139.png",
    // "https://drive.google.com/file/d/1eX25pocZ0lf--cQaDCzsQRwdnlayPWYM/view?usp=drivesdkPag_140.png",
    // "https://drive.google.com/file/d/1TsiozPyKZCfz2FIshh3g1puNFyLL2elg/view?usp=drivesdkPag_141.png",
    // "https://drive.google.com/file/d/15OSCJzC58fD_zDsoY80YmgYtTpoS-chW/view?usp=drivesdkPag_142.png",
    // "https://drive.google.com/file/d/1iR0PpkNBgthHLjflPSBADg5eT4ENmtvi/view?usp=drivesdkPag_143.png",
    // "https://drive.google.com/file/d/1xQ-8rLjlj6oYEkFxQLjK1EOs4QO93HNn/view?usp=drivesdkPag_144.png",
    // "https://drive.google.com/file/d/1k9Q5XAA0oFzRzrQGJMZ68YjQla4o-ubK/view?usp=drivesdkPag_145.png",
    // "https://drive.google.com/file/d/1V9wScWWj-I5NEyG-xIztcz_Hepu7cnAi/view?usp=drivesdkPag_146.png",
    // "https://drive.google.com/file/d/12QS-OZi0rgsNK24W5LwkNVtLxML6Spu7/view?usp=drivesdkPag_147.png",
    // "https://drive.google.com/file/d/1GLQh-WIIHSS_PEZkPQJUzN5Adz4qtpyx/view?usp=drivesdkPag_148.png",
    // "https://drive.google.com/file/d/18NuXNyap_ojZTQjetYxj3ygyTMw-LRQa/view?usp=drivesdkPag_149.png",
    // "https://drive.google.com/file/d/13YU5w_G6dctR-pAjH7r8-BVyk2DwPMM-/view?usp=drivesdkPag_150.png",
    // "https://drive.google.com/file/d/1v8ZMicw8PM4KGX2J3unlSq5P7VbZrWSl/view?usp=drivesdkPag_151.png",
    // "https://drive.google.com/file/d/1P5stId4WAqxus1KxOv8ybkhXrSSR1IKF/view?usp=drivesdkPag_152.png",
    // "https://drive.google.com/file/d/1MozXAlITlmr_LEbrEg7QqDvDXWuzblj3/view?usp=drivesdkPag_153.png",
    // "https://drive.google.com/file/d/1NN0Y0Ez3i5WRBZsgLfLmiy96VxyycNFx/view?usp=drivesdkPag_154.png",
    // "https://drive.google.com/file/d/17qgQxfQdj0jSL9Boabaz-v01RwcQ9nqw/view?usp=drivesdkPag_155.png",
    // "https://drive.google.com/file/d/1ROvBhPAmzav4-xk8sh0wsmoib_lU6tli/view?usp=drivesdkPag_156.png",
    // "https://drive.google.com/file/d/1g__gzY5w6scfAECCraJichMNngulEGO6/view?usp=drivesdkPag_157.png",
    // "https://drive.google.com/file/d/1BJPNid3ogx1rsKVPuQugxGK99qZ6HMrX/view?usp=drivesdkPag_158.png",
    // "https://drive.google.com/file/d/1wd1zMCDrtHKIPnxePzH_xqexUiptRtv8/view?usp=drivesdkPag_159.png",
    // "https://drive.google.com/file/d/1gIQBIk_vlh4YHjKGQaf3f6EKyHId4DzJ/view?usp=drivesdkPag_160.png",
    // "https://drive.google.com/file/d/1xXkmhn6uRcouEQM5vX2MZhUNkDuvDEXf/view?usp=drivesdkPag_161.png",
    // "https://drive.google.com/file/d/1U7KEadF0y79g_QR7X1cBHqwzQQrmTzpt/view?usp=drivesdkPag_162.png",
    // "https://drive.google.com/file/d/1Fr2RuhURuwMDgUtiHNsJ_eI4V1p6xgAr/view?usp=drivesdkPag_163.png",
    // "https://drive.google.com/file/d/1HQ54QxpJAnGLDVmQE2vWpwz7TBAmKkov/view?usp=drivesdkPag_164.png",
    // "https://drive.google.com/file/d/1jtClIspPzWy6yfULKgRmNdpgwFgnHjWU/view?usp=drivesdkPag_165.png",
    // "https://drive.google.com/file/d/1AtyYdaKYR7zoX08-QiXOwvIAYijeDoZ7/view?usp=drivesdkPag_166.png",
    // "https://drive.google.com/file/d/1wOpxDyLSGC08pdiOdKuEJ9uASSLOpkRg/view?usp=drivesdkPag_167.png",
    // "https://drive.google.com/file/d/1pzsZQh0jqJYbcWvV2QJU5AlL9ttez5uv/view?usp=drivesdkPag_168.png",
    // "https://drive.google.com/file/d/1KrmQB3wxfcJ1pzS9BiFCi-end-l2DYLi/view?usp=drivesdkPag_169.png",
    // "https://drive.google.com/file/d/1xVCcwrtBzYhW9_IIhVjulNyeRT_g8_1b/view?usp=drivesdkPag_170.png",
    // "https://drive.google.com/file/d/1JOH64P2lKo_pP4elPxC2ZOn-wnLlGpqE/view?usp=drivesdkPag_171.png",
    // "https://drive.google.com/file/d/1hXNuZoU5AK10Xycq6O0-Kd8LV5RvmG_d/view?usp=drivesdkPag_172.png",
    // "https://drive.google.com/file/d/1tcNEbBqY1QNfkNzG53C4TT6h2LDA5ihI/view?usp=drivesdkPag_173.png",
    // "https://drive.google.com/file/d/187x60kqtjSwb1fon2LmHzNiOYJjdyZlT/view?usp=drivesdkPag_174.png",
    // "https://drive.google.com/file/d/1ih6qJWg0Nk4ix6I3VYQtUnY7kR_VAhYc/view?usp=drivesdkPag_175.png",
    // "https://drive.google.com/file/d/1Hit4i-9j3UQFISHxvi1Ru2sJu3Aamm1j/view?usp=drivesdkPag_176.png",
    // "https://drive.google.com/file/d/1BQBPATgn0m2KGXBbX_uE9JC1mV3rffXJ/view?usp=drivesdkPag_177.png",
    // "https://drive.google.com/file/d/12OiPDc4I-nT-SuQkDm30cjvkx341JATn/view?usp=drivesdkPag_178.png",
    // "https://drive.google.com/file/d/14E_HRcVln6LKKEGeUC4-0aa5n_tDKiMj/view?usp=drivesdkPag_179.png",
    // "https://drive.google.com/file/d/1fle1TZMtZR-LijhgSS-ksEfE1Q6oqZDh/view?usp=drivesdkPag_180.png",
    // "https://drive.google.com/file/d/18xQ9Tik7dAs12s83_aEylzc6CG6Va9pv/view?usp=drivesdkPag_181.png",
    // "https://drive.google.com/file/d/1toArVoKd32vtaP7Sz8vdruG0Zy1_rhqQ/view?usp=drivesdkPag_182.png",
    // "https://drive.google.com/file/d/1tx0LoBnluROO8dfQNWW76cEtW4gaZDsc/view?usp=drivesdkPag_183.png",
    // "https://drive.google.com/file/d/1sI7ypuf5Df5hzcHhTVyWfvK7StDyCR3e/view?usp=drivesdkPag_184.png",
    // "https://drive.google.com/file/d/1pxuiBzi0R2c63tCqNcqxEUJUAbE6bV1I/view?usp=drivesdkPag_185.png",
    // "https://drive.google.com/file/d/1bZet7P-OAzW9qOBhmB6HM9ZX2OvmKb-Q/view?usp=drivesdkPag_186.png",
    // "https://drive.google.com/file/d/1Vf5VeYjiYGYUzATACmvmlEmZ9z6hjaEa/view?usp=drivesdkPag_187.png",
    // "https://drive.google.com/file/d/1XMNYyWfLI10F_KP61SmdQ2tiyAcQSS4d/view?usp=drivesdkPag_188.png",
    // "https://drive.google.com/file/d/1yecscdGEFh-NDDn7oiOJI-oTJWUaeVqd/view?usp=drivesdkPag_189.png",
    // "https://drive.google.com/file/d/1-RQNVZ0ohSav663EeMee6qMOuZ0y-SWk/view?usp=drivesdkPag_190.png",
    // "https://drive.google.com/file/d/1l6mjggtdIJ1ioY5oxttlFFLgq70jLj5_/view?usp=drivesdkPag_191.png",
    // "https://drive.google.com/file/d/1buvWWZI6Ot6wms9wc3XlwUH_qN2kn4h4/view?usp=drivesdkPag_192.png",
    // "https://drive.google.com/file/d/1KTWgHjWs3s0mqcXUzX65ypI2fMRXUWWj/view?usp=drivesdkPag_193.png",
    // "https://drive.google.com/file/d/1EMUoyEDvBgK48IurVT0RXA5DzW1Djte7/view?usp=drivesdkPag_194.png",
    // "https://drive.google.com/file/d/19lhpJHUQtbTe_6NkHH-XFT3qoVY7fDZh/view?usp=drivesdkPag_195.png",
    // "https://drive.google.com/file/d/12iQ6Pl_Fqgqv5TSQZilxIZWtGwfWg5Pp/view?usp=drivesdkPag_196.png",
];
const urlsAudios = [
    "https://www.dropbox.com/scl/fi/j4b1gnpuo18kohjt2r4ax/1-Lerne61.mp3?rlkey=rl6kncvjknxd27bcdoley6km0&raw=1",
    "https://www.dropbox.com/scl/fi/cj0iyo42qvfa3z8ad0wd2/2-Dekodireung61.mp3?rlkey=spdjy8juomg8z5tghpd0dykfb&raw=1",
    "https://www.dropbox.com/scl/fi/5bbacvieu8dn73rphaqbp/3-Diskussion61.mp3?rlkey=sh3ozexhxxeiauk7e1c85naez&raw=1",
    "https://www.dropbox.com/scl/fi/bczohup0xpdi0fdpycswi/4-Geschichtse61.mp3?rlkey=2qgpimxp856yhlnjqpezpt9d5&raw=1",
    "https://www.dropbox.com/scl/fi/99jfby937xlr55thz777a/1-Lerne62.mp3?rlkey=kf416giijt7r6ir5al7ijxcbq&raw=1",
    "https://www.dropbox.com/scl/fi/78qbbp7auhbo6u0mgyhzp/2-Decodierung62.mp3?rlkey=rh384fwsvoifdig94b2w6813v&raw=1",
    "https://www.dropbox.com/scl/fi/2hvfh3ozwl2n3lnlmhk0c/3-Diskussion62.mp3?rlkey=m96btf9emfnkqtwjs8aep5ry8&raw=1",
    "https://www.dropbox.com/scl/fi/as00hrmjloj6kmd1el47a/4-Geschichte62.mp3?rlkey=ol215c7z4tgxg38eufg01rmf5&raw=1",
    "https://www.dropbox.com/scl/fi/p4jm0y6ghkjkgcnw3ee9q/1-Lerne63.mp3?rlkey=wklr4ydjicu6sn6sz3u9ezvrx&raw=1",
    "https://www.dropbox.com/scl/fi/v5r5xaiacjnw8i9ey4bv2/2-Dekodierung63.mp3?rlkey=f4l6l839j9w9754eqd26uo5p3&raw=1",
    "https://www.dropbox.com/scl/fi/rd3ncxxrkqptxngbhos47/3-Diskussion63.mp3?rlkey=azlfd6wnxec1y8xqqdm7voc2y&raw=1",
    "https://www.dropbox.com/scl/fi/azleoj1t4p4nc890pvs3o/4-Geschichtse63.mp3?rlkey=n80dgsuk7hq7aai0ryxgnhxqk&raw=1",
    "https://www.dropbox.com/scl/fi/o9en7qd8j600xbrukku5i/1-Lerne64.mp3?rlkey=aj94mpz3hxqhm8vin6i0xt1wu&raw=1",
    "https://www.dropbox.com/scl/fi/sbbwfsz18qplnnmyyuhry/2-Dekodierung64.mp3?rlkey=wubq8cb48moi9bbg0m500d6su&raw=1",
    "https://www.dropbox.com/scl/fi/pvktssclt6i8bvhr691hw/3-Diskussion64.mp3?rlkey=bxs5mrczsyhfrolfl77t1o2fg&raw=1",
    "https://www.dropbox.com/scl/fi/ywdthnk6i3q0i875cg26q/4-Geschichte64.mp3?rlkey=easuhy0n0l1l5ukuftokvv9p8&raw=1",
    "https://www.dropbox.com/scl/fi/o4gnwocopdbf7sifb259u/1-Lerne65-1.mp3?rlkey=fz6oqd458sew3xcc7355xlw4c&raw=1",
    "https://www.dropbox.com/scl/fi/dta52ix4id4clodkp139z/2-Dekodierung65-1.mp3?rlkey=9376gesk5096i1viz56ret57y&raw=1",
    "https://www.dropbox.com/scl/fi/zdj7wut6ue2ijk1yhfokk/3-Diskussion65-1.mp3?rlkey=tzxv8g4bcralr087ex3q28ea7&raw=1",
    "https://www.dropbox.com/scl/fi/vgp4egzaryn6ll1yk0bo8/4-Geschichte65-1.mp3?rlkey=ogbwqar3h7539u4yc9w4e68af&raw=1",
    "https://www.dropbox.com/scl/fi/7zu26rbmlddg9m5pz9khk/1-Lerne66-1.mp3?rlkey=ih12j7oah6lb06pjnfo8qosjc&raw=1",
    "https://www.dropbox.com/scl/fi/oeayw7tpmbqcfy5oeu4qr/2-Dekodierung66-1.mp3?rlkey=92r0nbj0d3dt135s99cdf0uq1&raw=1",
    "https://www.dropbox.com/scl/fi/hbgsroa63k3dzoddpubd6/3-Diskussion66-1.mp3?rlkey=8u60poj3gmjbnuzo7peyntkz8&raw=1",
    "https://www.dropbox.com/scl/fi/robb5e991hymp5qjzdkvx/4-Geschichte66-1.mp3?rlkey=ewbvchcxewkaim1pz4cjx9v2g&raw=1",
    "https://www.dropbox.com/scl/fi/nndcy8fii64qbel9cbg1p/1-Lerne67-1.mp3?rlkey=fxquxo0a2vp1qd4e3mur524a4&raw=1",
    "https://www.dropbox.com/scl/fi/kzxf3kfop2hapk7if6q62/2-Dekodierung67-1.mp3?rlkey=fh8828lo31zs7zipyl9q0jebd&raw=1",
    "https://www.dropbox.com/scl/fi/p1grjcxzs4wyacworas49/3-Diskussion67-1.mp3?rlkey=f0i0som0ibv4qjub6yowjgsf8&raw=1",
    "https://www.dropbox.com/scl/fi/77apkyokiwqn64xkd4xzy/4-Geschichte67-1.mp3?rlkey=ws14z5u42c8jywf4sbqghpq7f&raw=1",
    "https://www.dropbox.com/scl/fi/83jl8pjeetk9gvehfk78i/1-Lerne68-1.mp3?rlkey=z9hrfoavob7rcsqep2ddm1mxn&raw=1",
    "https://www.dropbox.com/scl/fi/lplz8tt4iwhf2so24e5da/2-Dekodierung68-1.mp3?rlkey=a258d8nkxk3npn3a1bza7uasq&raw=1",
    "https://www.dropbox.com/scl/fi/gseeysjzcl63mv22jf4yt/3-Diskussion68-1.mp3?rlkey=oldsjvpu6dt59vpgk0rds5340&raw=1",
    "https://www.dropbox.com/scl/fi/w9mnba7tl2z6l0029db8m/4-Geschichte68-1.mp3?rlkey=jweikea59dssvt8r5xcdfgk9y&raw=1",
    "https://www.dropbox.com/scl/fi/f2bllrg10xy217yme65dp/1-Lerne69-1.mp3?rlkey=246ii2232rq0cxv0vh46ppe0s&raw=1",
    "https://www.dropbox.com/scl/fi/xbiohhzcickya6l1l944i/2-Dekodierung69-1.mp3?rlkey=sta048u0r6zn1mid8s7l6zez5&raw=1",
    "https://www.dropbox.com/scl/fi/dmw8y936tqvvnqbenvai0/3-Diskussion69-1.mp3?rlkey=0q2gi2z1vjdqgsgmesenns6o6&raw=1",
    "https://www.dropbox.com/scl/fi/t2pg1dru7o1khu2rvpdvx/4-Geschichte-1.mp3?rlkey=3djvy0za14ldyz9pf575ksc2u&raw=1",
    "https://www.dropbox.com/scl/fi/ky9zm5nz9yjugsirnym9e/1-Lerne70-1.mp3?rlkey=w6wdwnz3d6rq68af1owqnsrzn&raw=1",
    "https://www.dropbox.com/scl/fi/qs8z2xvsw6vtj49aw110h/2-Dekodierung70-1.mp3?rlkey=mk8k23ckdcu8hp0orl373bwo4&raw=1",
    "https://www.dropbox.com/scl/fi/z4benvpefjyrcfvvzjqsg/3-Diskussion70-1.mp3?rlkey=g55odtuz74owrwohxt8z0a53x&raw=1",
    "https://www.dropbox.com/scl/fi/fmp4udcgry570lehjv0ql/4-Geschichte70-1.mp3?rlkey=rr45coruptapz7tyb2ohb6gwh&raw=1",
    "https://www.dropbox.com/scl/fi/kobukipzdjl3uo90v50ll/1-Lerne71-1.mp3?rlkey=6cn2su9rz099y4lw9b1p2tfc2&raw=1",
    "https://www.dropbox.com/scl/fi/55p5d6qdoy6psxjcvyss3/2-Dekodierung71-1.mp3?rlkey=q4v0dmw1jpr6sbi8bjq4cjcum&raw=1",
    "https://www.dropbox.com/scl/fi/na9fon32yxb752ggo6gqb/3-Diskussion71-1.mp3?rlkey=gw1ufzo03ay3oo983jq9bptnx&raw=1",
    "https://www.dropbox.com/scl/fi/i3rvj58imwqnaiwsvgiwg/4-Geschichte71-1.mp3?rlkey=vgn4gjfleeepuc700r68v01j0&raw=1",
    "https://www.dropbox.com/scl/fi/87q8lkea83dmwgd9drnue/1-Lerne72-1.mp3?rlkey=6y8rl2v2v96w5rfu3gzr9l5wz&raw=1",
    "https://www.dropbox.com/scl/fi/d30kf6n67aw6yhmkwzua2/2-Dekodierung72-1.mp3?rlkey=8qc7c7tzwf59t3p45u9eternx&raw=1",
    "https://www.dropbox.com/scl/fi/93m6rkjj5k5q5xep39ecg/3-Diskussion72-1.mp3?rlkey=rh45ln4uwr06ut5pf4j1f35b0&raw=1",
    "https://www.dropbox.com/scl/fi/coxmcdv1f53pjgpjnu0ae/4-Geschichte72-1.mp3?rlkey=6jusfehhva41u7pxsvy0720in&raw=1",
    "https://www.dropbox.com/scl/fi/b3uthjukrb9moo0je3cb6/1-Lerne73-1.mp3?rlkey=6dyj7nxb61gv77i1jivom44c7&raw=1",
    "https://www.dropbox.com/scl/fi/9evqi98i960b6vb88s2cy/2-Dekodierung73-1.mp3?rlkey=em2slxlq6vthfgi1289wf02jg&raw=1",
    "https://www.dropbox.com/scl/fi/ifz64db5nkyk3flh15vw9/3-Diskussion73-1.mp3?rlkey=sqlm7jrabj57ezter6n6mco7v&raw=1",
    "https://www.dropbox.com/scl/fi/m5k3h0hpfmf3eb3ly0ydz/4-Geschichte73-1.mp3?rlkey=2q4yqmxvp5901wxe68tjb2q50&raw=1",
    "https://www.dropbox.com/scl/fi/oyqnvwcec34p1rmdbxby7/1-Lerne74-1.mp3?rlkey=r7mbs8piv9jb4pgp2474d6vzt&raw=1",
    "https://www.dropbox.com/scl/fi/pnll7phqan340r7mqd7px/1-Lerne74-1-1.mp3?rlkey=psx13tivlarpr7bql81au9or4&raw=1",
    "https://www.dropbox.com/scl/fi/pxcg9lv4lhf1dpjto751x/2-Dekodierung74-1.mp3?rlkey=3jb4wrmlhsiv2py09ke5cvyf2&raw=1",
    "https://www.dropbox.com/scl/fi/h5a35ep1h348vn3uorpaw/3-Diskussion74-1.mp3?rlkey=qe9ipeb901gzdtr9rr1zre7w0&raw=1",
    "https://www.dropbox.com/scl/fi/y0xxrxxpd3u4fmll9f4s8/4-Geschichte74-1.mp3?rlkey=5lq2d70o086qs84ng1p0nmbth&raw=1",
    "https://www.dropbox.com/scl/fi/cds0ij1103za4kdzmh8m8/1-Lerne75-1.mp3?rlkey=ohj9qat28ekp21cmxrxnu2nbg&raw=1",
    "https://www.dropbox.com/scl/fi/5mi05rt60dj1nfr4x4nbo/2-Dekodierung75-1.mp3?rlkey=iyt2ropl80e0zmubvsxe1pvfd&raw=1",
    "https://www.dropbox.com/scl/fi/d9jj6nwdgmlfvuke7s0sv/3-Diskussion75-1.mp3?rlkey=eu9kydnk7ghj4gsoon45zkdm8&raw=1",
    "https://www.dropbox.com/scl/fi/0w0zfeif7ix67iuehv09c/4-Geschichte75-1.mp3?rlkey=zei68c1i8tny1ann8mfl6opan&raw=1",
    "https://www.dropbox.com/scl/fi/0quenzdupdqt9jz02v7si/1-Lerne76-1.mp3?rlkey=lnb8lmc46m6npoozolcuo1o1u&raw=1",
    "https://www.dropbox.com/scl/fi/y4lva10u7aifm7u5iknzc/2-Dekodierung76-1.mp3?rlkey=t98yyze88p3ywmerj62kdil5m&raw=1",
    "https://www.dropbox.com/scl/fi/mklv3nw0xzbmi9lqzuonw/3-Diskussion76-1.mp3?rlkey=a7hn4h8x5bpy57yg55neo1dyg&raw=1",
    "https://www.dropbox.com/scl/fi/fpdus27nbuwqxh4hz5fg8/4-Geschichte76-1.mp3?rlkey=q608wze70qwm2gro4a0r1bbhv&raw=1",
    "https://www.dropbox.com/scl/fi/0qpkbpisgglrf2drvx92s/1-Lerne77-1.mp3?rlkey=54ogknh6d86sypvbthah5o09r&raw=1",
    "https://www.dropbox.com/scl/fi/uwp0z5saa3rn525wpkbba/2-Dekodierung77-1.mp3?rlkey=bvvfh49hj1ir2xuq52qp9i24s&raw=1",
    "https://www.dropbox.com/scl/fi/pz8w9xhj316meuesgw100/3-Diskussion77-1.mp3?rlkey=2b6kij55e4zgwf6wqrjfj7d2h&raw=1",
    "https://www.dropbox.com/scl/fi/wcr817hfzr3g9bfrahtxv/4-Geschichte77-1.mp3?rlkey=wrnnwt6pwma8gpsmfs2txleaa&raw=1",
    "https://www.dropbox.com/scl/fi/fkfk635kgo0h4ttylx3u0/1-Lerne78-1.mp3?rlkey=f4xf9030i71irq6i3m2fzaz80&raw=1",
    "https://www.dropbox.com/scl/fi/dzts894k0yczat4uec09b/2-Dekodierung78-1.mp3?rlkey=rf5f1p2fyppkmypogoatc8sjt&raw=1",
    "https://www.dropbox.com/scl/fi/qzkg9mebnmf429rks5ydv/3-Diskussion78-1.mp3?rlkey=tpnrggjyu2gw4msx4x0k35kd6&raw=1",
    "https://www.dropbox.com/scl/fi/5qzwpbsxnd2027kvh3lc0/4-Geschichte78-1.mp3?rlkey=5d5mp1lwld7let5qfm6ykvf2d&raw=1",
    "https://www.dropbox.com/scl/fi/r3wqnxlyltv98fkihdj1c/1-Lerne79-1.mp3?rlkey=t1fzkwd9ft40zvrg70sn9es88&raw=1",
    "https://www.dropbox.com/scl/fi/7du83amrokvc0fxjyhkr9/2-Dekodierung79-1.mp3?rlkey=2pokkprd61g6qc11cuy006a5g&raw=1",
    "https://www.dropbox.com/scl/fi/rvka39ooe3xyr71qjl89w/3-Diskussion79-1.mp3?rlkey=q9kkqjuwbf8wn919fzqafldf2&raw=1",
    "https://www.dropbox.com/scl/fi/7obvyvu90w853zltgsray/4-Geschichte79-1.mp3?rlkey=a9465t55qa6nv2tcl07o7s3ki&raw=1",
    "https://www.dropbox.com/scl/fi/nv6nmmle3fvdawgbnzujh/1-Lerne80-1.mp3?rlkey=u6rruk3duazzvov0wka1sqmc4&raw=1",
    "https://www.dropbox.com/scl/fi/dkf0dba6ui5ynj5gvd9fr/2-Dekodierung80-1.mp3?rlkey=lsotqci8n300yik7putdhvzih&raw=1",
    "https://www.dropbox.com/scl/fi/jvuenc0ldmflac1y0kdjd/3-Diskussion80-1.mp3?rlkey=ktvq11jv0et5ymub5uqt5t02e&raw=1",
    "https://www.dropbox.com/scl/fi/3pi69pptdnpwgbxjuvn8a/4-Geschichte80-1.mp3?rlkey=ijilxau6b8445het17uplesb5&raw=1",
    "https://www.dropbox.com/scl/fi/wyj7wbhnxi2n7ap7js4og/1-Lerne81-1.mp3?rlkey=pqiykohkk06zct8ny4mj9j770&raw=1",
    "https://www.dropbox.com/scl/fi/q58qzrp5xvuzvaj98hia1/2-Dekodierung81-1.mp3?rlkey=30fhwa4k0g2f9xvlsfvtsvb8l&raw=1",
    "https://www.dropbox.com/scl/fi/69u1b00xeuytfkfbdfdo9/3-Diskussion81-1.mp3?rlkey=upgtpg6lnh02xyd89d79rb9ia&raw=1",
    "https://www.dropbox.com/scl/fi/nr95i1gxr2jpp9vj9aoi1/4-Geschichte81-1.mp3?rlkey=1zvfl8fhkdx2xlwbs5py7m7xs&raw=1",
    "https://www.dropbox.com/scl/fi/tetkoqd6rztqwdb3kdoo8/1-Lerne82-1.mp3?rlkey=ecx9wy20gmzs19ztwm6vdhlfi&raw=1",
    "https://www.dropbox.com/scl/fi/9rl1yxys8zroi13djgzna/2-Dekodierung82-1.mp3?rlkey=fxryg13119ec9cj3d67ixy6xj&raw=1",
    "https://www.dropbox.com/scl/fi/oefrzuxpkbp85rd3lyxjl/3-Diskussion82-1.mp3?rlkey=bnb6x497rguqhm1jhxfsoqsl0&raw=1",
    "https://www.dropbox.com/scl/fi/09oww0l26vdjtxx1tz7l4/4-Geschichte82-1.mp3?rlkey=8jofjj8z2qlwy6xj72bddjfj2&raw=1",
    "https://www.dropbox.com/scl/fi/wyrb5d08ao6rswm5n0km6/1-Lerne83-1.mp3?rlkey=vk3c4z7au4soi4ufe7j2yeao8&raw=1",
    "https://www.dropbox.com/scl/fi/ue3262u3qxme95yiamndp/2-Dekodierung83-1.mp3?rlkey=0g1fq3eke14u4yar57wearyqz&raw=1",
    "https://www.dropbox.com/scl/fi/he2evform96atf4s98jh3/3-Diskussion83-1.mp3?rlkey=qe5rgz9azyy9fhhmc8we9xv3o&raw=1",
    "https://www.dropbox.com/scl/fi/idv8hisk9vc33ghsavq1o/4-Geschichte83-1.mp3?rlkey=x508qmccc58wnw8870e8nz0ej&raw=1",
    "https://www.dropbox.com/scl/fi/lm8hb4atlxafu9gr8tuuf/1-Lerne84-1.mp3?rlkey=q81dz8c1togycy4cxh06muzbh&raw=1",
    "https://www.dropbox.com/scl/fi/yzx9r87q7hxpl9s6201en/2-Dekodierung84-1.mp3?rlkey=rrus3wiuq49qkcq1hl2nxbc74&raw=1",
    "https://www.dropbox.com/scl/fi/b7ude67pmxjjj2lqz9chn/3-Diskussion84-1.mp3?rlkey=kjd2nv9ikm7wwfa7ft4i1ih17&raw=1",
    "https://www.dropbox.com/scl/fi/7fn4t7r5s3fojand1ze3z/4-Geschichte84-1.mp3?rlkey=0rcmav7cm8fyqu9cd05j7yhlz&raw=1",
    "https://www.dropbox.com/scl/fi/sh15ze7vknx8z1z8w3qjp/1-Lerne85-1.mp3?rlkey=g7mc5fvnfg0dmisai14lpnkmh&raw=1",
    "https://www.dropbox.com/scl/fi/i457v2wi291g7k303cuvr/2-Dekodierung85-1.mp3?rlkey=kd86isu9e14f8sdlsz6vgjvy2&raw=1",
    "https://www.dropbox.com/scl/fi/pipfwhgydckyszn345h2n/3-Diskussion85-1.mp3?rlkey=ft1b0v5zp2y8o9te1su60j6lp&raw=1",
    "https://www.dropbox.com/scl/fi/j9d1wvxqqhaj3lgj3wiup/4-Geschichte85-1.mp3?rlkey=crek3hwazxs4lc1iqethqyz8r&raw=1",
    "https://www.dropbox.com/scl/fi/5on5317dmltuy2i71c8df/1-Lerne86-1.mp3?rlkey=92nmviyyje51rmurx42899u22&raw=1",
    "https://www.dropbox.com/scl/fi/t6fpg8aelx9q3jwkk3g6f/2-Dekodierung86-1.mp3?rlkey=7o58x3lat4kl84hh2bhrknbuh&raw=1",
    "https://www.dropbox.com/scl/fi/eh4rcakhj1qv3p3ddxw7h/3-Diskussion86-1.mp3?rlkey=57y0tf4qekjx3v7zxb2unlpn4&raw=1",
    "https://www.dropbox.com/scl/fi/d15stmy7ra4ah131cbjpi/4-Geschichte86-1.mp3?rlkey=g4vkfh65lv1g6y4ww720qoi41&raw=1",
    "https://www.dropbox.com/scl/fi/5mit8x6djt7c1j6tr10y2/1-Lerne87-1.mp3?rlkey=w7c16o9jdsbknimmjxcqnuy5w&raw=1",
    "https://www.dropbox.com/scl/fi/u7xyjjvd6yqc2qgg0hw9i/2-Dekodierung87-1.mp3?rlkey=irz6kh5bmwfgf9fi5pbqe47vy&raw=1",
    "https://www.dropbox.com/scl/fi/talxvbftxrnes6ilemnae/3-Diskussion87-1.mp3?rlkey=6p2stgrakja9okmpt93njmkvx&raw=1",
    "https://www.dropbox.com/scl/fi/o4uaeto3yjonzg3b55wk2/4-Geschichte87-1.mp3?rlkey=s3rq0718ed3pswy5xcun2hbne&raw=1",
    "https://www.dropbox.com/scl/fi/wa27x87vaknsdvm8ln2wy/1-Lerne88-1.mp3?rlkey=b931ybaedkiocbex9ap4sta9v&raw=1",
    "https://www.dropbox.com/scl/fi/zvgjwpo2ac8wf8p07ch8g/2-Dekodierung88-1.mp3?rlkey=udlx6sncsrtb2sy12wfgbasj7&raw=1",
    "https://www.dropbox.com/scl/fi/qrhzeh06g9n8riz8o2yt9/3-Diskussion88-1.mp3?rlkey=5mlttp4s3r72u79lrbd08swgi&raw=1",
    "https://www.dropbox.com/scl/fi/fdr0rzgorrdykt0yheh6e/4-Geschichte88-1.mp3?rlkey=ux680hoplxdge2k9gaiyonkzo&raw=1",
    "https://www.dropbox.com/scl/fi/bo27t36dz8ho5ok3t7yoi/1-Lerne89-1.mp3?rlkey=rusfcp7otpbwfu0fptp1xk49w&raw=1",
    "https://www.dropbox.com/scl/fi/ejtbv00oio4rba58zscfz/2-Dekodierung89-1.mp3?rlkey=9v1boizigjsz7py4f68pgt0nj&raw=1",
    "https://www.dropbox.com/scl/fi/6skztphj4r0slf7emky1y/3-Diskussion89-1.mp3?rlkey=2qkfcm7b9exh9vqyup1g17ets&raw=1",
    "https://www.dropbox.com/scl/fi/pukxundul1e1jnmdt5e80/4-Geschichte89-1.mp3?rlkey=s15rd7893kfjnu5d9dqwpt5z7&raw=1",
    "https://www.dropbox.com/scl/fi/1nw8q01rfuyvm6qf97v7y/1-Lerne90-1.mp3?rlkey=mxhat11gg2w37afjv0v0asibx&raw=1",
    "https://www.dropbox.com/scl/fi/b16crvyzr3n4vv6pk25gp/2-Dekodierung90-1.mp3?rlkey=4qmmqe5zor4gv8ic6zqu30coy&raw=1",
    "https://www.dropbox.com/scl/fi/pjvrpeop07mll6u34ib78/3-Diskussion90-1.mp3?rlkey=h8839lwglno7rb1l758i3lp11&raw=1",
    "https://www.dropbox.com/scl/fi/y5ikdm3len9il6mkvlhk4/4-Geschichte90-1.mp3?rlkey=quy9kdtrg7yyjbjbd9u00mxj1&raw=1",

];

// --- Credenciales válidas ---
const VALID_CREDENTIALS = [
    { username: "1", password: "1" },
    { username: "user1", password: "pass1" },
];

// --- Elementos del DOM ---
const loginContainer = document.getElementById('login-container');
const contentContainer = document.getElementById('content-container');
const loginBtn = document.getElementById('loginBtn');
const loginError = document.getElementById('loginError');
const audioSelector = document.getElementById('audioSelector');
const audioPlayer = document.getElementById('audioPlayer');
const speedControl = document.getElementById('speedControl');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progress-bar');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volumeSlider');
const rewindBtn = document.getElementById('rewindBtn');
const forwardBtn = document.getElementById('forwardBtn');

// --- Funciones de manejo de login ---
loginBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica si las credenciales coinciden con alguna de las válidas
    const validCredential = VALID_CREDENTIALS.find(
        (cred) => cred.username === username && cred.password === password
    );

    if (validCredential) {
        loginContainer.classList.add('hidden');
        contentContainer.classList.remove('hidden');
    } else {
        loginError.textContent = "Usuario o contraseña incorrectos.";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    contentContainer.classList.add('hidden');
});


// Control de volumen
volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value;
});

// Botones de salto
rewindBtn.addEventListener('click', () => {
    audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 15);
});

forwardBtn.addEventListener('click', () => {
    audioPlayer.currentTime = Math.min(audioPlayer.duration, audioPlayer.currentTime + 15);
});


// Actualizar barra de progreso y tiempo
audioPlayer.addEventListener('timeupdate', () => {
    const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progress.style.width = percent + '%';

    currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
});

// Obtener duración total
audioPlayer.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audioPlayer.duration);
});

// Hacer clic en la barra de progreso para saltar a una parte del audio
progressBar.addEventListener('click', (e) => {
    const clickPosition = e.offsetX / progressBar.offsetWidth;
    audioPlayer.currentTime = clickPosition * audioPlayer.duration;
});

// Control de velocidad
speedControl.addEventListener('change', function () {
    const speed = parseFloat(speedControl.value);
    audioPlayer.playbackRate = speed;
});

// Reproducir el audio seleccionado
audioSelector.addEventListener('change', () => {
    const selectedAudio = audioSelector.value;
    if (selectedAudio) {
        audioPlayer.src = selectedAudio;
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        alert('Por favor selecciona un audio.');
    }
});

// --- Función para formatear el tiempo ---
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

speedControl.addEventListener('change', function () {
    const speed = parseFloat(speedControl.value);
    audioPlayer.playbackRate = speed;
});



// --- Funciones de manejo de Google Drive ---
function extraerIdDeGoogleDrive(url) {
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
}

function convertirUrlGoogleDrive(url) {
    const fileId = extraerIdDeGoogleDrive(url);
    return fileId ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w2000` : null;
}

const imagenes = urlsOriginales.map(url => convertirUrlGoogleDrive(url));

// --- Variables para el flipbook ---
let currentPageIndex = 0;
let currentZoom = 1; // Nivel de zoom actual
const bookContainer = document.querySelector('.book-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentPageSpan = document.getElementById('currentPage');
const totalPagesSpan = document.getElementById('totalPages');
const zoomSlider = document.getElementById('zoomSlider');

// --- Configuración del zoom ---
zoomSlider.addEventListener('input', (e) => {
    currentZoom = parseFloat(e.target.value);
    applyZoom();
});

function zoomIn() {
    currentZoom += 0.1;
    applyZoom();
}

function zoomOut() {
    currentZoom = Math.max(0.1, currentZoom - 0.1);
    applyZoom();
}

function resetZoom() {
    currentZoom = 1;
    applyZoom();
}

// --- Funciones de navegación del flipbook ---
//funcion loadImages
function loadImages() {
    bookContainer.innerHTML = ''; // Limpiar contenedor

    imagenes.forEach((src, index) => {
        const page = document.createElement('div');
        page.className = `page ${index === 0 ? 'active' : ''}`;

        loadAndEnhanceImage(src, (enhancedSrc) => {
            const img = document.createElement('img');
            img.src = enhancedSrc;
            img.alt = `Página ${index + 1}`;
            img.style.position = 'absolute';
            img.style.transform = `scale(${currentZoom})`;

            img.onerror = function () {
                this.parentElement.innerHTML = `
                    <div class="error-message">
                        Error al cargar la imagen ${index + 1}.<br>
                        Asegúrate de que la imagen sea pública en Google Drive.
                    </div>
                `;
            };

            page.appendChild(img);
            bookContainer.appendChild(page);
        });
    });

    assignDragEvents();
    totalPagesSpan.textContent = imagenes.length;
    updateButtons();
}

function loadAndEnhanceImage(url, callback) {
    const img = new Image();
    img.crossOrigin = "anonymous"; // Para evitar problemas de CORS
    img.src = url;

    img.onload = function () {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Aumentar la resolución de la imagen
        const scaleFactor = 2; // Puedes cambiar este valor para mejorar la calidad
        canvas.width = img.width * scaleFactor;
        canvas.height = img.height * scaleFactor;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Convertir a formato de imagen optimizado
        callback(canvas.toDataURL("image/webp", 0.95)); // 95% de calidad en WebP
    };

    img.onerror = function () {
        console.error("Error al cargar la imagen:", url);
        callback(url); // Usa la imagen original en caso de error
    };
}

async function loadImages() {
    bookContainer.innerHTML = ''; // Limpiar el contenedor
    let imagePromises = imagenes.map((src, index) => {
        return new Promise((resolve) => {
            const page = document.createElement('div');
            page.className = `page ${index === 0 ? 'active' : ''}`;

            const img = new Image();
            img.src = src;
            img.alt = `Página ${index + 1}`;

            img.onload = () => resolve({ index, page, img });
            img.onerror = () => {
                page.innerHTML = `<div class="error-message">Error al cargar la imagen ${index + 1}.</div>`;
                resolve({ index, page, img: null });
            };
        });
    });

    const loadedImages = await Promise.all(imagePromises);
    loadedImages.sort((a, b) => a.index - b.index); // Asegurar el orden correcto

    loadedImages.forEach(({ page, img }) => {
        if (img) page.appendChild(img);
        bookContainer.appendChild(page);
    });

    totalPagesSpan.textContent = imagenes.length;
    updateButtons();
}

// fin funcion loadImages
/*
function loadImages() {
    bookContainer.innerHTML = ''; // Limpiar contenedor

    imagenes.forEach((src, index) => {
        const page = document.createElement('div');
        page.className = `page ${index === 0 ? 'active' : ''}`;

        const img = document.createElement('img');
        img.src = src;
        img.alt = `Página ${index + 1}`;
        img.style.position = 'absolute';
        img.style.transform = `scale(${currentZoom})`; // Aplicar el zoom actual

        img.onerror = function () {
            this.parentElement.innerHTML = `
                <div class="error-message">
                    Error al cargar la imagen ${index + 1}.<br>
                    Asegúrate de que la imagen sea pública en Google Drive.
                </div>
            `;
        };

        page.appendChild(img);
        bookContainer.appendChild(page);
    });

    assignDragEvents(); // Asignar eventos de arrastre
    totalPagesSpan.textContent = imagenes.length;
    updateButtons();
}*/

function updateButtons() {
    prevBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = currentPageIndex === imagenes.length - 1;
    currentPageSpan.textContent = currentPageIndex + 1;
}

function showPage(index) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    pages[index].classList.add('active');
    applyZoom(); // Mantener el zoom al cambiar de página
}

function prevPage() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        showPage(currentPageIndex);
        updateButtons();
    }
}

function nextPage() {
    if (currentPageIndex < imagenes.length - 1) {
        currentPageIndex++;
        showPage(currentPageIndex);
        updateButtons();
    }
}

function goToPage() {
    const pageInput = document.getElementById('pageInput');
    const pageNumber = parseInt(pageInput.value, 10);
    if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > imagenes.length) {
        alert(`Por favor, ingresa un número de página válido entre 1 y ${imagenes.length}.`);
        return;
    }

    currentPageIndex = pageNumber - 1;
    updatePageDisplay();
    pageInput.value = ''; // Limpiar el input después de navegar
}

const pageInput = document.getElementById('pageInput');
pageInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const pageNumber = parseInt(pageInput.value, 10);
        if (!isNaN(pageNumber) && pageNumber > 0) {
            goToPage(pageNumber);
        } else {
            alert("Por favor, ingresa un número de página válido.");
        }
    }
});

function updatePageDisplay() {
    document.querySelectorAll('.page').forEach((page, index) => {
        page.classList.toggle('active', index === currentPageIndex);
    });

    currentPageSpan.textContent = currentPageIndex + 1;
    totalPagesSpan.textContent = imagenes.length;

    prevBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = currentPageIndex === imagenes.length - 1;
}

function applyZoom() {
    const img = document.querySelector('.page.active img');
    if (img) {
        img.style.transform = `scale(${currentZoom})`;
    }
}

// --- Funciones de arrastre de las imágenes ---
let startX, startY, isDragging = false;

function dragStart(e) {
    isDragging = true;
    const img = e.target;
    startX = e.clientX - img.offsetLeft;
    startY = e.clientY - img.offsetTop;
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);
}

function drag(e) {
    if (!isDragging) return;
    const img = document.querySelector('.page.active img');
    if (img) {
        img.style.left = `${e.clientX - startX}px`;
        img.style.top = `${e.clientY - startY}px`;
    }
}

function dragEnd() {
    isDragging = false;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', dragEnd);
}

function assignDragEvents() {
    const images = document.querySelectorAll('.page img');
    images.forEach(img => {
        img.addEventListener('mousedown', dragStart);
    });
}

// --- Navegación con teclas de flecha ---
// --- Navegación con teclado ---
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevPage();
    if (e.key.toLowerCase() === 'a') prevPage();
    if (e.key.toLowerCase() === 'n') prevPage();
    if (e.key === 'ArrowRight') nextPage();
    if (e.key.toLowerCase() === 'd') nextPage();
    if (e.key.toLowerCase() === 'm') nextPage();
    if (e.key.toLowerCase() === 'z') zoomIn();
    if (e.key.toLowerCase() === 'c') zoomOut();
    if (e.key.toLowerCase() === 'r') resetImagePosition(); // Agregar reset con tecla 'r'
    if (e.code === 'Space') {
        e.preventDefault();
        playPauseBtn.click();
    }
});

// Reemplazar la función resetZoom existente con la nueva función
function resetZoom() {
    resetImagePosition();
}

// --- Funciones de zoom y posición ---
function resetImagePosition() {
    const img = document.querySelector('.page.active img');
    if (img) {
        // Reset zoom
        currentZoom = 1;
        zoomSlider.value = currentZoom;

        // Reset position
        img.style.left = '0px';
        img.style.top = '0px';
        img.style.transform = `scale(${currentZoom})`;
        img.style.transformOrigin = 'initial';
    }
}

document.body.style.cursor = "pointer";

document.body.style.setProperty("cursor", "pointer", "important");
document.querySelector("*").style.cursor = "pointer";

document.onkeydown = function (evt) {
    evt = evt || window.event;

    if (!evt.ctrlKey && evt.key.toLowerCase() == 'f') {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    } else if (!evt.ctrlKey && evt.key.toLowerCase() == 'm') {
        mv(1);
    } else if (!evt.ctrlKey && evt.key.toLowerCase() == 'n') {
        mv(-1);
    }
};


// --- Inicialización mejorada ---
document.addEventListener('DOMContentLoaded', () => {
    loadImages();
    updatePageDisplay();
    populateLessonSelector();

    // Inicializar el slider de zoom
    zoomSlider.value = currentZoom;

    // Agregar event listeners adicionales si es necesario
    document.addEventListener('keydown', function (evt) {
        evt = evt || window.event;

        if (!evt.ctrlKey) {
            if (evt.key === 'f') {
                toggleFullscreen();
            }
        }
    });


});

function toggleUrlProp(prop) {
    console.log(`Toggle cursor property: ${prop}`);
    if (prop === "cursor") {
        const currentCursor = document.body.style.cursor;
        if (currentCursor === "pointer") {
            document.body.style.setProperty("cursor", "default", "important");
        } else {
            document.body.style.setProperty("cursor", "pointer", "important");
        }
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "h" || 'H' || 'e' || 'E') {
        console.log("Tecla H presionada");
        setTimeout(() => {
            const currentCursor = document.body.style.cursor;
            document.body.style.cursor = currentCursor === "pointer" ? "default" : "pointer";
            console.log(`Cursor is now: ${document.body.style.cursor}`);
        }, 50);
    }
});


// Función para avanzar páginas (placeholder, debes implementar)
function mv(direction) {
    if (direction === 1) {
        nextPage();
    } else if (direction === -1) {
        prevPage();
    }
}

// Función para alternar el cursor (ejemplo básico)
function toggleUrlProp(prop) {
    console.log(`Toggle cursor property: ${prop}`);
    // Ejemplo de implementación
    if (prop === "cursor") {
        const cursorElement = document.documentElement.style.cursor;
        if (cursorElement === "pointer") {
            document.documentElement.style.cursor = "default";
        } else {
            document.documentElement.style.cursor = "pointer";
        }
    }
}
// Función para actualizar el cursor (ejemplo básico)
function updateCursor() {
    console.log("Cursor updated function called");
    const cursor = document.documentElement.style.cursor;
    console.log(`Cursor is now: ${cursor}`);
    // Asegúrate de que el cursor sea visible y cambie.
}

// Reproducir o pausar audio enfocado
function toggleAudioPlay(audioId) {
    const audio = document.getElementById(audioId);
    if (audio) {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    } else {
        console.error("Audio not found:", audioId);
    }
}

// Rebobinar audio enfocado
function rewind(audio) {
    if (audio) {
        audio.currentTime = Math.max(0, audio.currentTime - 10); // Rebobinar 10 segundos
    }
}

// --- Inicialización ---
loadImages();
updatePageDisplay();

// Funciones de manejo de teclado para zoom
document.addEventListener('keydown', function (event) {
    if (event.key === 'z') {
        zoomIn();

    } else if (event.key === 'Z') {
        zoomIn();
    }
    else if (event.key === 'x') {
        zoomOut();
    }
    else if (event.key === 'X') {
        zoomOut();
    }
});

// Función para hacer zoom in
function zoomIn() {
    currentZoom += 0.1;
    applyZoom();
}

// Función para hacer zoom out
function zoomOut() {
    currentZoom = Math.max(0.1, currentZoom - 0.1);
    applyZoom();
}

// Función para aplicar el zoom a la imagen activa
function applyZoom() {
    const img = document.querySelector('.page.active img');
    if (img) {
        img.style.transform = `scale(${currentZoom})`;
    }
}

// --- Navegación con teclado y funciones especiales ---
document.addEventListener('keydown', (e) => {
    // Evitar el comportamiento predeterminado de la barra espaciadora
    if (e.code === 'Space') {
        e.preventDefault();
        toggleAudioPlayback();
        return;
    }

});

let hKeyState = 0;

const cursors = {
    triangleArrow: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"20\"><path d=\"M0 8 L20 8 L20 2 L32 10 L20 18 L20 12 L0 12 Z\" fill=\"red\"/></svg>') 0 10, auto"
};

function setGlobalCursor(isCustomCursor) {
    const cursorStyle = isCustomCursor ? cursors.triangleArrow : "default";

    document.body.style.setProperty("cursor", cursorStyle, "important");
    const allElements = document.getElementsByTagName('*');
    for (let element of allElements) {
        element.style.setProperty("cursor", cursorStyle, "important");
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "h") {
        setGlobalCursor(hKeyState === 0);
        hKeyState = (hKeyState + 1) % 2;
    }
});


document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "e") {
        setGlobalCursor(hKeyState === 0);
        hKeyState = (hKeyState + 1) % 2;
    }
});


// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    populateLessonSelector();
});


// Agregar funcionalidad para teclas y fullscreen
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase(); // Convertir a minúscula para evitar problemas con mayúsculas

    if (key.toLowerCase() === 'q') {
        toggleFullscreen();
    }
});

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

function enableFullscreen() {
    document.documentElement.requestFullscreen();
}

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////



// --- Cargar las opciones de audio sublecciones con nombre propio ---

urlsAudios.forEach((audioUrl) => {
    const option = document.createElement('option');
    option.value = audioUrl;

    // Extraer el nombre del archivo desde la URL
    const urlParts = audioUrl.split('/');
    const fileNameWithExtension = urlParts[urlParts.length - 1];

    // Extraer el nombre base sin la extensión y sin el identificador de Cloudinary
    const fileName = fileNameWithExtension
        .split('.')[0]           // Remover la extensión .mp3
        .replace(/_[a-z0-9]+$/, ''); // Remover el identificador aleatorio al final

    // Asignar el nombre del archivo como texto de la opción
    option.textContent = fileName;
    audioSelector.appendChild(option);
});

// Mantener el valor del volumen al cambiar de audio
audioSelector.addEventListener('change', () => {
    const selectedAudio = audioSelector.value;
    if (selectedAudio) {
        audioPlayer.src = selectedAudio;
        audioPlayer.volume = volumeSlider.value; // Mantener el volumen actual
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        alert('Por favor selecciona un audio.');
    }
});

// --- Funciones de manejo de audio ---

// Reproducir/Pausar
playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Abspielen';
    }
});



// --- Configuración de lecciones ---
const lessonsPerBook = 30; // Total de lecciones por libro
const firstLessonPage = 5; // Página donde comienza la primera lección (ajustable)
let startLessonNumber = 61; // Número inicial de la primera lección (ajustable)

// Configuración de los saltos especiales y dinámicos
const defaultPagesPerLesson = 6; // Páginas estándar entre lecciones
const specialPageJumpsBase = {
    10: 10, // Salto para la lección 10 a 11
    20: 8,  // Salto para la lección 20 a 21
};

// Función para calcular el salto dinámico según el rango inicial de lecciones
function getDynamicPageJumps(startLesson) {
    const specialPageJumps = {};
    const baseOffset = Math.floor((startLesson - 1) / lessonsPerBook) * lessonsPerBook;

    for (const [key, value] of Object.entries(specialPageJumpsBase)) {
        specialPageJumps[parseInt(key) + baseOffset] = value;
    }

    return specialPageJumps;
}

// Páginas dinámicas entre lecciones especiales
let variablePageJump = 6; // Configuración ajustable

// Elementos del selector
const lessonSelector = document.getElementById('lessonSelector');

// Función para poblar dinámicamente el selector de lecciones
function populateLessonSelector() {
    lessonSelector.innerHTML = ''; // Limpiar opciones previas

    // Añadir la opción "Inicio"
    const optionInicio = document.createElement('option');

    optionInicio.value = 1; // Página inicial
    optionInicio.textContent = 'Anfang';
    lessonSelector.appendChild(optionInicio);

    // Cálculo dinámico de páginas
    let currentPage = firstLessonPage;
    const specialPageJumps = getDynamicPageJumps(startLessonNumber);

    for (let i = 0; i < lessonsPerBook; i++) {
        const lessonNumber = startLessonNumber + i;
        const option = document.createElement('option');
        option.value = currentPage; // Página actual
        option.textContent = `Lektion ${lessonNumber}`;
        lessonSelector.appendChild(option);

        // Calcular salto para la siguiente página
        if (specialPageJumps[lessonNumber]) {
            currentPage += specialPageJumps[lessonNumber];
        } else if (lessonNumber === startLessonNumber + 20) {
            currentPage += variablePageJump; // Salto especial dinámico
        } else {
            currentPage += defaultPagesPerLesson;
        }
    }
}

// Función para ir a la lección seleccionada
function goToLesson() {
    const selectedPage = parseInt(lessonSelector.value, 10);
    if (!isNaN(selectedPage)) {
        currentPageIndex = selectedPage - 1; // Ajustar a índice 0
        updatePageDisplay();
        showPage(currentPageIndex);
    }
}

// Función para actualizar el salto variable
function updateVariablePageJump(newJumpValue) {
    variablePageJump = newJumpValue;
    populateLessonSelector(); // Actualizar opciones
}

// Función para actualizar el inicio del rango de lecciones
function updateStartLessonNumber(newStartLessonNumber) {
    startLessonNumber = newStartLessonNumber;
    populateLessonSelector(); // Actualizar opciones
}
