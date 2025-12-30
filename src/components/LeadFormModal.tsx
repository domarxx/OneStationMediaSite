import { useState } from "react";
import { X, Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void; // Função que dispara o download real
  studyTitle: string;
}

const LeadFormModal = ({ isOpen, onClose, onSuccess, studyTitle }: LeadFormModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // --- AQUI VOCÊ ENVIARIA PARA SEU CRM / BANCO DE DADOS ---
    // Simulação de envio (espera 1.5s)
    console.log("Lead Capturado:", { ...formData, study: studyTitle });
    
    setTimeout(() => {
      setIsLoading(false);
      onSuccess(); // Dispara o download
      onClose();   // Fecha o modal
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-background border border-border rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50 bg-muted/20">
          <div>
            <h3 className="text-lg font-bold text-foreground">Baixar Estudo</h3>
            <p className="text-xs text-muted-foreground mt-1">Preencha para liberar o download gratuito.</p>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">Nome Completo</label>
              <input
                required
                id="name"
                type="text"
                placeholder="Seu nome"
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">E-mail</label>
              <input
                required
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-foreground">Telefone / WhatsApp</label>
              <input
                required
                id="phone"
                type="tel"
                placeholder="(11) 99999-9999"
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full mt-4 gap-2" 
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Processando...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" /> Baixar PDF Agora
                </>
              )}
            </Button>
          </form>
          
          <p className="text-[10px] text-center text-muted-foreground mt-4">
            Ao clicar em baixar, você concorda em receber comunicações da One Station Media.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadFormModal;