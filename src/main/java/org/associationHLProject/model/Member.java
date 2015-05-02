package org.associationHLProject.model;

import javax.persistence.Entity;
import java.io.Serializable;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Version;
import java.lang.Override;
import java.util.Date;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
public class Member implements Serializable
{

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   @Column(name = "id", updatable = false, nullable = false)
   private Long id;
   @Version
   @Column(name = "version")
   private int version;

   @Column
   private String titre;

   @Column
   private String nom;

   @Column
   private String prenom;

   @Column
   private String telephone;

   @Column
   private String email;

   @Column
   private String profession;

   @Column
   private String diplome;

   @Column
   private String pays;

   @Column
   private String ville;

   @Column
   private String invitedBy;

   @Column
   private String civilite;

   @Column
   private String nbreEnfant;

   @Column
   @Temporal(TemporalType.DATE)
   private Date dateNaissance;

   @Column
   private String inscription;

   @Column(length = 2000)
   private String motivation;

   public Long getId()
   {
      return this.id;
   }

   public void setId(final Long id)
   {
      this.id = id;
   }

   public int getVersion()
   {
      return this.version;
   }

   public void setVersion(final int version)
   {
      this.version = version;
   }

   @Override
   public boolean equals(Object obj)
   {
      if (this == obj)
      {
         return true;
      }
      if (!(obj instanceof Member))
      {
         return false;
      }
      Member other = (Member) obj;
      if (id != null)
      {
         if (!id.equals(other.id))
         {
            return false;
         }
      }
      return true;
   }

   @Override
   public int hashCode()
   {
      final int prime = 31;
      int result = 1;
      result = prime * result + ((id == null) ? 0 : id.hashCode());
      return result;
   }

   public String getTitre()
   {
      return titre;
   }

   public void setTitre(String titre)
   {
      this.titre = titre;
   }

   public String getNom()
   {
      return nom;
   }

   public void setNom(String nom)
   {
      this.nom = nom;
   }

   public String getPrenom()
   {
      return prenom;
   }

   public void setPrenom(String prenom)
   {
      this.prenom = prenom;
   }

   public String getTelephone()
   {
      return telephone;
   }

   public void setTelephone(String telephone)
   {
      this.telephone = telephone;
   }

   public String getEmail()
   {
      return email;
   }

   public void setEmail(String email)
   {
      this.email = email;
   }

   public String getProfession()
   {
      return profession;
   }

   public void setProfession(String profession)
   {
      this.profession = profession;
   }

   public String getDiplome()
   {
      return diplome;
   }

   public void setDiplome(String diplome)
   {
      this.diplome = diplome;
   }

   public String getPays()
   {
      return pays;
   }

   public void setPays(String pays)
   {
      this.pays = pays;
   }

   public String getVille()
   {
      return ville;
   }

   public void setVille(String ville)
   {
      this.ville = ville;
   }

   public String getInvitedBy()
   {
      return invitedBy;
   }

   public void setInvitedBy(String invitedBy)
   {
      this.invitedBy = invitedBy;
   }

   public String getCivilite()
   {
      return civilite;
   }

   public void setCivilite(String civilite)
   {
      this.civilite = civilite;
   }

   public String getNbreEnfant()
   {
      return nbreEnfant;
   }

   public void setNbreEnfant(String nbreEnfant)
   {
      this.nbreEnfant = nbreEnfant;
   }

   public Date getDateNaissance()
   {
      return dateNaissance;
   }

   public void setDateNaissance(Date dateNaissance)
   {
      this.dateNaissance = dateNaissance;
   }

   public String getInscription()
   {
      return inscription;
   }

   public void setInscription(String inscription)
   {
      this.inscription = inscription;
   }

   public String getMotivation()
   {
      return motivation;
   }

   public void setMotivation(String motivation)
   {
      this.motivation = motivation;
   }

   @Override
   public String toString()
   {
      String result = getClass().getSimpleName() + " ";
      if (titre != null && !titre.trim().isEmpty())
         result += "titre: " + titre;
      if (nom != null && !nom.trim().isEmpty())
         result += ", nom: " + nom;
      if (prenom != null && !prenom.trim().isEmpty())
         result += ", prenom: " + prenom;
      if (telephone != null && !telephone.trim().isEmpty())
         result += ", telephone: " + telephone;
      if (email != null && !email.trim().isEmpty())
         result += ", email: " + email;
      if (profession != null && !profession.trim().isEmpty())
         result += ", profession: " + profession;
      if (diplome != null && !diplome.trim().isEmpty())
         result += ", diplome: " + diplome;
      if (pays != null && !pays.trim().isEmpty())
         result += ", pays: " + pays;
      if (ville != null && !ville.trim().isEmpty())
         result += ", ville: " + ville;
      if (invitedBy != null && !invitedBy.trim().isEmpty())
         result += ", invitedBy: " + invitedBy;
      if (civilite != null && !civilite.trim().isEmpty())
         result += ", civilite: " + civilite;
      if (nbreEnfant != null && !nbreEnfant.trim().isEmpty())
         result += ", nbreEnfant: " + nbreEnfant;
      if (inscription != null && !inscription.trim().isEmpty())
         result += ", inscription: " + inscription;
      if (motivation != null && !motivation.trim().isEmpty())
         result += ", motivation: " + motivation;
      return result;
   }
}