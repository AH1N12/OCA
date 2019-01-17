package AH1N1.OCA.repo.entiity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Note {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

//    @ManyToOne
//    //@JoinColumn(name="parent_id", nullable=false, updatable = false)
//    private Folder parentFolder;

    @Column(name = "tittle")
    @NotNull
    private String tittle;

    @Column(name = "value", length = 1024)
    @NotNull
    private String value;

    @Column(name = "parent_folder", updatable = false, insertable = false)
    private Long parentFolderId;
}
