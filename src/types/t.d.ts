export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      " apartment": {
        Row: {
          apartment_name: string | null;
          balcony: boolean;
          bathrooms: number;
          created_at: string;
          deposits: number;
          exclusive_laundry: boolean;
          floor: number;
          id: number;
          meters: number;
          only_electricity: boolean;
          parking_spots: number;
          personal_rating: number | null;
          price: number;
          project: number;
          rooms: number;
          tower: number;
        };
        Insert: {
          apartment_name?: string | null;
          balcony?: boolean;
          bathrooms?: number;
          created_at?: string;
          deposits?: number;
          exclusive_laundry?: boolean;
          floor: number;
          id?: number;
          meters: number;
          only_electricity?: boolean;
          parking_spots?: number;
          personal_rating?: number | null;
          price?: number;
          project: number;
          rooms: number;
          tower?: number;
        };
        Update: {
          apartment_name?: string | null;
          balcony?: boolean;
          bathrooms?: number;
          created_at?: string;
          deposits?: number;
          exclusive_laundry?: boolean;
          floor?: number;
          id?: number;
          meters?: number;
          only_electricity?: boolean;
          parking_spots?: number;
          personal_rating?: number | null;
          price?: number;
          project?: number;
          rooms?: number;
          tower?: number;
        };
        Relationships: [
          {
            foreignKeyName: " apartment_project_fkey";
            columns: ["project"];
            isOneToOne: false;
            referencedRelation: "project";
            referencedColumns: ["id"];
          }
        ];
      };
      project: {
        Row: {
          address: string;
          bbq: boolean;
          brochure: string | null;
          court: boolean;
          created_at: string;
          delivery_date: string;
          game_salon: boolean;
          gym: boolean;
          id: number;
          link: string | null;
          name: string;
          separation_amount: number;
          social_spaces: number;
          status: string;
        };
        Insert: {
          address: string;
          bbq?: boolean;
          brochure?: string | null;
          court?: boolean;
          created_at?: string;
          delivery_date: string;
          game_salon?: boolean;
          gym?: boolean;
          id?: number;
          link?: string | null;
          name: string;
          separation_amount?: number;
          social_spaces?: number;
          status?: string;
        };
        Update: {
          address?: string;
          bbq?: boolean;
          brochure?: string | null;
          court?: boolean;
          created_at?: string;
          delivery_date?: string;
          game_salon?: boolean;
          gym?: boolean;
          id?: number;
          link?: string | null;
          name?: string;
          separation_amount?: number;
          social_spaces?: number;
          status?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
