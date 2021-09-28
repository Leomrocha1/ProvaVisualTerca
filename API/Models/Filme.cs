using System;

namespace API.Models
{
    public class Filme
    {
        public Filme() => CriadoEm = DateTime.Now;
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Genero { get; set; }
        public string Produtora { get; set; }
        public string Diretor { get; set; }
        public DateTime CriadoEm { get; set; }

        public override string ToString() =>
            $"Nome: {Nome} | Gênero: {Genero} | Produtora: {Produtora} | Ano de Lançamento: {Diretor} | Criado em: {CriadoEm}";
    }
}