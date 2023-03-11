import { month1Mahdiar, month1Amin, month1Abbas } from '../database/month1.js'
import { month2Mahdiar, month2Amin, month2Abbas } from '../database/month2.js'
export let dataBase = [
    // Mahdiar
    [
        ...month1Mahdiar,
        ...month2Mahdiar
    ],
    // Amin
    [
        ...month1Amin,
        ...month2Amin
    ],
    // Amir Abbas
    [
        ...month1Abbas,
        ...month2Abbas
    ],
];
export let userBtn = [
    { id: 0, name: "mahdiar" },
    { id: 1, name: "amin" },
    { id: 2, name: "amir abbas" },
];