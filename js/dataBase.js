import { month1Mahdiar, month1Amin, month1Abbas } from '../database/month1.js'
import { month2Mahdiar, month2Amin, month2Abbas } from '../database/month2.js'
import { month3Mahdiar, month3Amin, month3Abbas } from '../database/month3.js'
import { month4Mahdiar, month4Amin, month4Abbas } from '../database/month4.js'
import { month5Mahdiar, month5Amin, month5Abbas } from '../database/month5.js'
import { month6Mahdiar, month6Amin, month6Abbas } from '../database/month6.js'
export let dataBase = [
    // Mahdiar
    [
        ...month1Mahdiar,
        ...month2Mahdiar,
        ...month3Mahdiar,
        ...month4Mahdiar,
        ...month5Mahdiar,
        ...month6Mahdiar,
    ],
    // Amin
    [
        ...month1Amin,
        ...month2Amin,
        ...month3Amin,
        ...month4Amin,
        ...month5Amin,
        ...month6Amin,
    ],
    // Amir Abbas
    [
        ...month1Abbas,
        ...month2Abbas,
        ...month3Abbas,
        ...month4Abbas,
        ...month5Abbas,
        ...month6Abbas,
    ],
];