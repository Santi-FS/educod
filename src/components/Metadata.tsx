import type { Metadata } from "next";

export const meta: Metadata = {
  title: "EduCod - Tecnología al Servicio de la Educación",
  description:
    "En EduCod, fusionamos la tecnología y la educación para potenciar el aprendizaje sin reemplazar la labor docente. Descubre cómo nuestras soluciones innovadoras transforman la enseñanza.",
  keywords: [
    "educación digital",
    "tecnología educativa",
    "Moodle",
    "apps educativas",
    "desarrollo web",
    "transformación digital",
    "instituciones educativas",
    "soluciones tecnológicas",
  ],
  openGraph: {
    title: "EduCod - Tecnología al Servicio de la Educación",
    description:
      "Conoce cómo en EduCod integramos el código y la educación para mejorar el aprendizaje sin sustituir la actividad docente.",
    url: "https://www.educod.com.ar/about",
    type: "website",
    images: [
      {
        url: "https://www.educod.com.ar/images/about/about-og.webp",
        width: 1024,
        height: 1024,
        alt: "Integración de tecnología y educación en EduCod",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EduCod - Tecnología al Servicio de la Educación",
    description:
      "En EduCod, la tecnología y la educación se unen para transformar el aprendizaje sin reemplazar la labor docente.",
    images: ["https://www.educod.com.ar/images/about/about-og.webp"],
  },
};
