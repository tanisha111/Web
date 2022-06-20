import { DateTime } from "https://cdn.jsdelivr.net/npm/luxon@2.4.0/build/es6/luxon.js";
export function diffDates(firstDate, secondDate) {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);
    if (firstDate > secondDate)
        secondDate = [firstDate, firstDate = secondDate][0]; 
    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
}

export const diffToHtml = diff => `
    <span>
        ${diff.years ? 'Лет: ' + diff.years : ''}
        ${diff.months ? 'Месяцев: ' + diff.months : ''}
        ${diff.days ? 'Дней: ' + diff.days : ''}
    </span>
`;