export const translations = {
  es: {
    // Navigation
    appName: 'PDFtoText',
    logoAlt: 'Logo de PDFtoText',

    // Main page
    mainDescription: 'Convert PDF to TXT es una aplicación simple y rápida para macOS que transforma tus archivos PDF en texto editable. Perfecta para extraer contenido fácilmente y trabajar con él en cualquier editor de texto.',
    downloadButton: 'Descargar',
    browserNotSupported: 'Tu navegador no soporta el tag de video.',

    // Footer
    license: 'Licencia',
    sourceCode: 'Código Fuente',
    privacyPolicy: 'Política de Privacidad',
    home: 'Inicio',

    // Privacy Policy
    privacyTitle: 'Política de Privacidad',
    noDataCollectionTitle: 'Sin Recolección de Datos',
    noDataCollectionText: 'PDFtoText está diseñado pensando en tu privacidad. Queremos ser claros sobre nuestra postura en la recolección de datos: no recolectamos ninguna información personal ni datos de nuestros usuarios.',
    
    howItWorksTitle: 'Cómo Funciona PDFtoText',
    howItWorksIntro: 'PDFtoText opera completamente en tu máquina local. Cuando conviertes un archivo PDF:',
    howItWorksList: [
      'Todo el procesamiento ocurre localmente en tu computadora',
      'Ningún archivo se sube a servidores',
      'No se recolectan ni transmiten datos de uso',
      'No se implementan herramientas de análisis o seguimiento'
    ],

    fileAccessTitle: 'Acceso a Archivos',
    fileAccessText: 'La aplicación solo accede a los archivos PDF que tú eliges explícitamente para convertir. Estos archivos permanecen en tu computadora y nunca son transmitidos a ningún otro lugar.',

    contactTitle: 'Contacto',
    contactText: 'Si tienes alguna pregunta sobre nuestras prácticas de privacidad, no dudes en contactarnos en'
  },
  en: {
    // Navigation
    appName: 'PDFtoText',
    logoAlt: 'PDFtoText Logo',

    // Main page
    mainDescription: 'Convert PDF to TXT is a simple and fast macOS app that transforms your PDF files into editable text. Perfect for easily extracting content and working with it in any text editor.',
    downloadButton: 'Download',
    browserNotSupported: 'Your browser does not support the video tag.',

    // Footer
    license: 'License',
    sourceCode: 'Source Code',
    privacyPolicy: 'Privacy Policy',
    home: 'Home',

    // Privacy Policy
    privacyTitle: 'Privacy Policy',
    noDataCollectionTitle: 'No Data Collection',
    noDataCollectionText: 'PDFtoText is designed with your privacy in mind. We want to be clear about our stance on data collection: we don\'t collect any personal information or data from our users.',
    
    howItWorksTitle: 'How PDFtoText Works',
    howItWorksIntro: 'PDFtoText operates entirely on your local machine. When you convert a PDF file:',
    howItWorksList: [
      'All processing happens locally on your computer',
      'No files are uploaded to any servers',
      'No usage data is collected or transmitted',
      'No analytics or tracking tools are implemented'
    ],

    fileAccessTitle: 'File Access',
    fileAccessText: 'The app only accesses the PDF files you explicitly choose to convert. These files remain on your computer and are never transmitted elsewhere.',

    contactTitle: 'Contact',
    contactText: 'If you have any questions about our privacy practices, feel free to reach out at'
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.es;

export function getTranslation(lang: Language, key: TranslationKey): string {
  return translations[lang][key];
}

export function getTranslationList(lang: Language, key: TranslationKey): string[] {
  const value = translations[lang][key];
  return Array.isArray(value) ? value : [];
} 