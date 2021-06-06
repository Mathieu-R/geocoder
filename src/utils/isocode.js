import countries from 'i18n-iso-countries'

/**
 * convert alpha3 to alpha2 country code
 * @param {string} code
 * @returns {string}
 */
export const countryCode = (code) => (code && code.length === 3)
  ? countries.alpha3ToAlpha2(code)
  : code

const OPTS = { select: 'official' }

/**
 * obtain country name by code
 * @param {string} code
 * @param {string} [language='en']
 * @returns {string}
 */
export const countryName = (code, language = 'en') => {
  if (!code) return
  const lang = language.split('-')[0]
  const name = countries.getName(code, lang, OPTS)
  return name || countries.getName(code, 'en', OPTS)
}