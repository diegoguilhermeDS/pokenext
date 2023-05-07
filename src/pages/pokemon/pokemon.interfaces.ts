export interface iPokemonPageProps {
  pokemon: PokemonRoot
}

export interface PokemonRoot {
    abilities: Ability[]
    base_experience: number
    forms: Form[]
    height: number
    held_items: any[]
    id: number
    is_default: boolean
    location_area_encounters: string
    name: string
    order: number
    past_types: any[]
    species: Species
    sprites: Sprites
    stats: Stat[]
    types: Type[]
    weight: number
  }
  
  export interface Ability {
    ability: Ability2
    is_hidden: boolean
    slot: number
  }
  
  export interface Ability2 {
    name: string
    url: string
  }
  
  export interface Form {
    name: string
    url: string
  }
  
  export interface Species {
    name: string
    url: string
  }
  
  export interface Sprites {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
    other: Other
  }
  
  export interface Other {
    dream_world: DreamWorld
    home: Home
    official_artwork: OfficialArtwork
  }
  
  export interface DreamWorld {
    front_default: string
    front_female: any
  }
  
  export interface Home {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface OfficialArtwork {
    front_default: string
    front_shiny: string
  }
  
  export interface Stat {
    base_stat: number
    effort: number
    stat: Stat2
  }
  
  export interface Stat2 {
    name: string
    url: string
  }
  
  export interface Type {
    slot: number
    type: Type2
  }
  
  export interface Type2 {
    name: string
    url: string
  }