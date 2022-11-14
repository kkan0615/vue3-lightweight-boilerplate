export interface Feature {
  id: number
  icon: string
  title: string
  content: string
}

/**
 * Feature list for home
 */
export const featureList: Feature[] = [
  // Vite
  {
    id: 1,
    icon: 'cable',
    title:  ('Types.Models.Views.Features.Vite.title'),
    content:  ('Types.Models.Views.Features.Vite.content')
  },
  {
    id: 2,
    icon: 'language',
    title:  ('Types.Models.Views.Features.Localization.title'),
    content:  ('Types.Models.Views.Features.Localization.content')
  },
  {
    id: 3,
    icon: 'database',
    title:  ('Types.Models.Views.Features.Pinia.title'),
    content:  ('Types.Models.Views.Features.Pinia.content')
  },
  {
    id: 4,
    icon: 'install_mobile',
    title:  ('Types.Models.Views.Features.PWA.title'),
    content:  ('Types.Models.Views.Features.PWA.content')
  },
  {
    id: 5,
    icon: 'construction',
    title:  ('Types.Models.Views.Features.Develop.title'),
    content:  ('Types.Models.Views.Features.Develop.content')
  },
  {
    id: 6,
    icon: 'imagesearch_roller',
    title:  ('Types.Models.Views.Features.Style.title'),
    content:  ('Types.Models.Views.Features.Style.content')
  },
]
