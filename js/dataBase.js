import { month1Mahdiar, month1Amin, month1Abbas } from '../database/month1.js'
import { month2Mahdiar, month2Amin, month2Abbas } from '../database/month2.js'
import { month3Mahdiar, month3Amin, month3Abbas } from '../database/month3.js'
export let dataBase = [
    // Mahdiar
    [
        ...month1Mahdiar,
        ...month2Mahdiar,
        ...month3Mahdiar,
    ],
    // Amin
    [
        ...month1Amin,
        ...month2Amin,
        ...month3Amin,
    ],
    // Amir Abbas
    [
        ...month1Abbas,
        ...month2Abbas,
        ...month3Abbas,
    ],
];