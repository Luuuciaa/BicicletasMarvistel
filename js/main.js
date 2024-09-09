
function productos($categoria) {

    switch ($categoria) { // a través del switch vemos que array se va a armar
        case "venzo":
            $productos = [
                {
                    "titulo": "Venzo Eolo Evo R29 Talle L",
                    "url": "img/Venzo Eolo Evo R29 talle L.webp",
                    "precio": "$ 410.000"
                },
                {
                    "titulo": "Venzo Frida Belle R29",
                    "url": "img/Venzo Firda Belle R29.jpg",
                    "precio": "$ 481.000"
                },
                {
                    "titulo": "Venzo Primal XC",
                    "url": "img/Venzo Primal XC R29.webp",
                    "precio": "$ 615.000"
                },
                {
                    "titulo": "Venzo Skyline Shadow Evo R29",
                    "url": "img/Venzo Skyline Shadow Evo R29.webp",
                    "precio": "$ 451.000"
                }

            ]
            break;

        case "spy":
            $productos = [
                {
                    "titulo": "Spy Trail R27,5",
                    "url": "img/Spy Trail R27,5.webp",
                    "precio": "$ 380.000"
                },
                {
                    "titulo": "Spy Bullet R29 Talle M (2x9 hidráulico)",
                    "url": "img/Spy Bullet R29 Talle M (2x9 hidráulico).jpg",
                    "precio": "$ 608.000"
                },
                {
                    "titulo": "Spy Bullet Élite R29",
                    "url": "img/Spy Bullet Élite R29.webp",
                    "precio": "$ 907.000"
                },
                {
                    "titulo": "Spy Bullet R29 (21vel)",
                    "url": "img/Spy Bullet R29 (21vel).webp",
                    "precio": "$ 426.000"
                }

            ]
            break;
            case "raleigh":
                $productos = [
                    {
                        "titulo": "Raleigh Venture 3.0 R27,5",
                        "url": "img/Raleigh Venture 3.0 R27,5.jpg",
                        "precio": "$ 509.000"
                    },
                    {
                        "titulo": "Raleigh Scout R24",
                        "url": "img/Raleigh Scout R24.webp",
                        "precio": "$ 405.000"
                    },
                    {
                        "titulo": "Raleigh Mojave 7.0 R29 Talle 17",
                        "url": "img/Raleigh Mojave 7.0 R29 Talle 17.webp",
                        "precio": "$ 1.093.000"
                    },
                    {
                        "titulo": "Raleigh Mojave 4.5 R29",
                        "url": "img/Raleigh Mojave 4.5 R29.webp",
                        "precio": "$ 789.000"
                    }
    
                ]
                break;
            
        case "moove":
            $productos = [
                {
                    "titulo": "Moove Cronos R29",
                    "url": "img/Moove Cronos R29.webp",
                    "precio": "$ 310.000"
                },
                {
                    "titulo": "Moove Cronos R29 (24vel e hidráulico)",
                    "url": "img/Moove Cronos R29 (24vel e hidráulico).jpg",
                    "precio": "$ 427.000"
                },
                {
                    "titulo": "Moove Cronos R29 21vel",
                    "url": "img/Moove Cronos R29 21v.webp",
                    "precio": "$ 380.000"
                },
                {
                    "titulo": "Moove R29 24vel",
                    "url": "img/Moove R29 24v.webp",
                    "precio": "$ 450.000"
                }

            ]
            break;
        case "ninos":
            $productos = [
                {
                    "titulo": "Raleigh Jazzi R20",
                    "url": "img/Raleigh Jazzi R20.webp",
                    "precio": "$ 240.000"
                },
                {
                    "titulo": "Raleigh MXR R20",
                    "url": "img/Raleigh MXR R20.jpg",
                    "precio": "$ 240.000"
                },
                {
                    "titulo": "Bici moto Jordan R16",
                    "url": "img/Bici moto Jordan R16.png",
                    "precio": "$ 219.000"
                },
                {
                    "titulo": "Paseo Marvistel R14",
                    "url": "img/Paseo Marvistel R14.png",
                    "precio": "$ 180.000"
                }
            ]
            break;
        case "marvistel":
            $productos = [
                {
                    "titulo": "Mountain Bike Marvistel R24",
                    "url": "img/Mountain Bike Marvistel R24.png",
                    "precio": "$ 183.000"
                },
                {
                    "titulo": "Paseo Full Marvistel R26",
                    "url": "img/Paseo Full Marvistel R26.png",
                    "precio": "$ 202.000"
                },
                {
                    "titulo": "Playera  Marvistel R29",
                    "url": "img/Playera contrapedal Marvistel R29.png",
                    "precio": "$ 205.000"
                },
                {
                    "titulo": "Tricicargo Marvistel R20",
                    "url": "img/Tricicargo Marvistel R20.png",
                    "precio": "$ 329.000"
                }

            ]
            break;
        case "plegables":
            $productos = [
                {
                    "titulo": "Raleigh Curve plegable R20",
                    "url": "img/Raleigh Curve plegable R20.jpg",
                    "precio": "$ 484.000"
                },
                {
                    "titulo": "Raleigh Straight plegable R20",
                    "url": "img/Raleigh Straight plegable R20.jpg",
                    "precio": "$ 484.000"
                },
                {
                    "titulo": "Fire Bird plegable R20",
                    "url": "img/Fire Bird plegable R20.webp",
                    "precio": "$ 400.000"
                },
                {
                    "titulo": "Raleigh  Straight plegable R20 ",
                    "url": "img/Raleigh Plegable  Straight R20.webp",
                    "precio": "$ 516.000"
                }
            ]
            break;
        case "totem":
            $productos = [
                {
                    "titulo": "Tótem Spirit R29 Talle 19",
                    "url": "img/Tótem Spirit R29 Talle 19.png",
                    "precio": "$ 370.000"
                },
                {
                    "titulo": "Tótem R27.5 24v",
                    "url": "img/Totem R27.5 24v.webp",
                    "precio": "$ 400.000"
                },
                {
                    "titulo": "Tótem R29 21v",
                    "url": "img/Totem R29 21vel.webp",
                    "precio": "$ 320.000"
                },
                {
                    "titulo": "Tótem R29 18v",
                    "url": "img/Totem R29 18 Vel.webp",
                    "precio": "$ 350.000"
                }
            ]
            break;

            case "skinred":
                $productos = [
                    {
                        "titulo": "Skinred Maorí R29 Talle 15",
                        "url": "img/Skinred Maorí R29 Talle 15.webp",
                        "precio": "$ 310.000"
                    },
                    {
                        "titulo": "Skinred 21v R26",
                        "url": "img/Skinred 21v R26.webp",
                        "precio": "$ 270.000"
                    },
                    {
                        "titulo": "Skinred  Sioux Dama R27.5",
                        "url": "img/Skinred SIOUX R 27.5 DAMA.jpg",
                        "precio": "$ 500.000"
                    },
                    {
                        "titulo": "Skinred Creek R29 24vel",
                        "url": "img/Skin Red Creek R29 24vel.webp",
                        "precio": "$ 350.000"
                    }
                ]
                break;

                case "raider":
                    $productos = [
                        {
                            "titulo": "Raider Fortis R29",
                            "url": "img/Raider Fortis R29.png",
                            "precio": "$ 271.000"
                        },
                        {
                            "titulo": "Raider  R29 21v",
                            "url": "img/Raider  R29 21v.webp",
                            "precio": "$ 250.000"
                        },
                        {
                            "titulo": " Raider Overtech  21v R29",
                            "url": "img/Overtech Raider  21v R29.webp",
                            "precio": "$ 400.700"
                        },
                        {
                            "titulo": "Raider R29 21v",
                            "url": "img/Raider R29 21v.webp",
                            "precio": "$ 270.400"
                        }
                    ]
                    break;

                    case "lamborghini":
                        $productos = [
                            {
                                "titulo": "Lamborghini R29",
                                "url": "img/Lamborghini R29.webp",
                                "precio": "$ 271.000"
                            },
                            {
                                "titulo": "Lamborghini R26",
                                "url": "img/Lamborghini R26.jpg",
                                "precio": "$ 250.000"
                            },
                            {
                                "titulo": "Lamborhini R.29 Outlet  21vel",
                                "url": "img/Lamborhini R.29 OUTLET  21vel.jpg",
                                "precio": "$ 300.000"
                            },
                            {
                                "titulo": "Lamborghini R20",
                                "url": "img/Lamborghini R20.webp",
                                "precio": "$ 260.000"
                            }
                        ]
                        break;

                        case "shift ":
                            $productos = [
                                {
                                    "titulo": "Shift Rebel R 29 21vel ",
                                    "url": "img/Shift Rebel R 29 21vel.webp",
                                    "precio": "$ 355.240"
                                },
                                {
                                    "titulo": "Shift Rebel R29 Talle L",
                                    "url": "img/Shift Rebel R29 Talle L.jpg",
                                    "precio": "$348.000 "
                                },
                                {
                                    "titulo": "Shift Rebel  21v R 29",
                                    "url": "img/Shift Rebel  21 vel R 29.webp",
                                    "precio": "$ 360.000"
                                },
                                {
                                    "titulo": "Shift R29 Talle 18",
                                    "url": "img/Shift R29 Talle 18.jpg",
                                    "precio": "$ 350.000"
                                }
                            ]
                            break;


    }
    $caja = document.getElementById('productos'); // Seleccionamos el contenedor donde van a estar los card
    $caja.innerHTML = ""; // vaciamos todo el contenido que haya 

    //A traves de FOR creamos los card.
    for (let i = 0; i < $productos.length; i++) {
        $caja.innerHTML +=
        '<div class="col-sm-12 col-md-6 col-lg-3 border-primary mb-3 ">' +
                '<div class="card">' +
                    '<img src="' + $productos[i].url + '" class="card-img-top" alt="...">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title text-center" style="  font-size: 18px;">' + $productos[i].titulo + '</h5>' +
                        '<strong><p class="card-text text-center">' + $productos[i].precio + '</p></strong>' +
                        '<div  class="d-flex justify-content-center ">'+
                        '<a href="https://wa.me/541138540419"class="btn btn-primary" target="_blank" style="font-size: 15px;height: 35px;">COMPRAR</a>'
                    '</div>' +
                '</div>' +
                '<div>' +
            '</div>';
    }


}
