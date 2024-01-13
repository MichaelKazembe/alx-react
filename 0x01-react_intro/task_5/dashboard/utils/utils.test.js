import { getFullYear, getFooterCopy, getLatestNotification } from '../src/utils';

test('returns current year', () => {
	expect(getFullYear()).toBe(2024);
});

test('correct footer copy', () => {
	expect(getFooterCopy(true)).toBe('Holberton School');
	expect(getFooterCopy(false)).toBe('Holberton main dashboard');
});

test('returns right notification', () => {
	expect(getLatestNotification()).toBe(
		'<strong>Urgent requirement</strong> - complete by EOD'
	);
});